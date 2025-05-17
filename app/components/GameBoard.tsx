'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './GameBoard.module.css';

interface GameBoardProps {
  player1Name: string;
  player2Name: string;
  onGameEnd?: (winner: string | null) => void;
}

interface ScoreType {
  [key: string]: number;
}

const GameBoard: React.FC<GameBoardProps> = ({ player1Name, player2Name, onGameEnd }) => {
  const calculateWinner = (squares: Array<string | null>): [string | null, number[] | null] => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return [squares[a], line];
      }
    }
    return [null, null];
  };

  const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [scores, setScores] = useState<ScoreType>(() => {
    // Initialize scores from localStorage if available
    const savedScores = localStorage.getItem('ticTacToeScores');
    if (savedScores) {
      try {
        const parsedScores = JSON.parse(savedScores);
        // Only use saved scores if player names match
        if (parsedScores[player1Name] !== undefined && parsedScores[player2Name] !== undefined) {
          return parsedScores;
        }
      } catch (error) {
        console.error('Error parsing saved scores:', error);
      }
    }
    // Otherwise initialize new scores
    return {
      [player1Name]: 0,
      [player2Name]: 0,
    };
  });
  const [selectedSquare, setSelectedSquare] = useState<number>(-1);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);
  const [scoreUpdated, setScoreUpdated] = useState<string | null>(null);
  const [gameState, setGameState] = useState<'playing' | 'draw' | 'won'>('playing');
  const [gameEnded, setGameEnded] = useState(false);

  // Calculate current game state
  const [currentWinner] = calculateWinner(board);
  const currentPlayer = isXNext ? player1Name : player2Name;
  const isDraw = !currentWinner && !board.includes(null);

  const getStatusMessage = useCallback(() => {
    if (gameState === 'won') {
      const [winner] = calculateWinner(board);
      const winnerName = winner === 'X' ? player1Name : player2Name;
      return (
        <div className={styles.winnerInfo}>
          <div className={styles.winnerTitle}>Winner!</div>
          <div className={styles.winnerName}>
            {winnerName}
            <span className={styles.winnerSymbol}>({winner})</span>
          </div>
        </div>
      );
    }
    if (gameState === 'draw') {
      return (
        <div className={styles.winnerInfo}>
          <div className={styles.winnerTitle}>Draw!</div>
          <div className={styles.winnerName}>Good game!</div>
        </div>
      );
    }
    return (
      <div className={styles.turnInfo}>
        Next player: {currentPlayer} ({isXNext ? 'X' : 'O'})
      </div>
    );
  }, [gameState, board, player1Name, player2Name, currentPlayer, isXNext]);

  useEffect(() => {
    const [winner, line] = calculateWinner(board);
    const isDraw = !winner && !board.includes(null);
    
    if (winner) {
      const winnerName = winner === 'X' ? player1Name : player2Name;
      console.log('Winner detected:', { winnerName, symbol: winner });
      
      setGameState('won');
      setGameEnded(true);
      setWinningLine(line);
      
      setScores(prev => ({
        ...prev,
        [winnerName]: prev[winnerName] + 1
      }));
      setScoreUpdated(winnerName);
      
      setTimeout(() => {
        setScoreUpdated(null);
      }, 2000);
      
      onGameEnd?.(winnerName);
    } else if (isDraw) {
      console.log('Draw detected');
      setGameState('draw');
      setGameEnded(true);
      onGameEnd?.(null);
    }
  }, [board, player1Name, player2Name, onGameEnd]);

  const makeMove = useCallback((index: number) => {
    if (board[index] || gameEnded) {
      console.log('Move ignored - Square occupied or game ended');
      return;
    }

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  }, [board, isXNext, gameEnded]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const handleArrowKey = (direction: 'up' | 'down' | 'left' | 'right') => {
      const currentIndex = selectedSquare === -1 ? 4 : selectedSquare;
      let newIndex = currentIndex;

      switch (direction) {
        case 'up':
          newIndex = currentIndex - 3;
          if (newIndex < 0) newIndex += 9;
          break;
        case 'down':
          newIndex = (currentIndex + 3) % 9;
          break;
        case 'left':
          newIndex = currentIndex - 1;
          if (newIndex < 0 || newIndex % 3 === 2) newIndex += 3;
          break;
        case 'right':
          newIndex = (currentIndex + 1) % 3 + (Math.floor(currentIndex / 3) * 3);
          break;
      }

      setSelectedSquare(newIndex);
    };

    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        handleArrowKey('up');
        break;
      case 'ArrowDown':
        e.preventDefault();
        handleArrowKey('down');
        break;
      case 'ArrowLeft':
        e.preventDefault();
        handleArrowKey('left');
        break;
      case 'ArrowRight':
        e.preventDefault();
        handleArrowKey('right');
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (selectedSquare !== -1) {
          makeMove(selectedSquare);
        }
        break;
    }
  }, [selectedSquare, makeMove]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    try {
      localStorage.setItem('ticTacToeScores', JSON.stringify(scores));
    } catch (error) {
      console.error('Error saving scores:', error);
    }
  }, [scores]);

  useEffect(() => {
    const initGame = () => {
      setBoard(Array(9).fill(null));
      setIsXNext(true);
      setWinningLine(null);
      setScoreUpdated(null);
      setSelectedSquare(-1);
      setGameState('playing');
      setGameEnded(false);
    };

    initGame();
  }, []);

  const startNewGame = useCallback(() => {
    console.log('Starting new game - Resetting state');
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinningLine(null);
    setScoreUpdated(null);
    setSelectedSquare(-1);
    setGameState('playing');
    setGameEnded(false);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.scoreBoard}>
        <div className={`${styles.playerScore} ${currentWinner === 'X' ? styles.winningPlayer : ''}`}>
          <span className={styles.playerName}>{player1Name} (X)</span>
          <span className={`${styles.score} ${scoreUpdated === player1Name ? styles.scoreUpdated : ''}`}>
            {scores[player1Name]}
          </span>
        </div>
        <div className={`${styles.playerScore} ${currentWinner === 'O' ? styles.winningPlayer : ''}`}>
          <span className={styles.playerName}>{player2Name} (O)</span>
          <span className={`${styles.score} ${scoreUpdated === player2Name ? styles.scoreUpdated : ''}`}>
            {scores[player2Name]}
          </span>
        </div>
      </div>

      <div 
        className={`${styles.status} ${
          gameState === 'won' ? styles.winner : ''
        } ${gameState === 'draw' ? styles.draw : ''}`}
      >
        {getStatusMessage()}
      </div>
      
      {gameEnded && (
        <button 
          className={styles.newGameButton}
          onClick={startNewGame}
        >
          Start New Game
        </button>
      )}
      
      <div className={styles.boardWrapper}>
        <Image 
          src="/grid.svg" 
          alt="Game Grid" 
          width={300} 
          height={300} 
          className={styles.gridImage}
          priority
        />
        <div className={styles.board} role="grid" aria-label="Tic-tac-toe game board">
          {board.map((square, index) => (
            <button
              key={index}
              className={`${styles.square} 
                ${index === selectedSquare ? styles.selected : ''}
                ${!square && !gameEnded ? styles.hoverable : ''}`}
              onClick={() => makeMove(index)}
              onFocus={() => setSelectedSquare(index)}
              onBlur={() => setSelectedSquare(-1)}
              disabled={!!square || gameEnded}
              aria-label={`Square ${index + 1}${square ? ` marked with ${square}` : ''}`}
              role="gridcell"
            >
              {square && (
                <div 
                  className={`${styles.mark} ${winningLine?.includes(index) ? styles.winningMark : ''}`}
                  key={`${index}-${square}`}
                >
                  <Image
                    src={square === 'X' ? '/cross.svg' : '/zero.svg'}
                    alt={square}
                    width={60}
                    height={60}
                    priority
                  />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameBoard;