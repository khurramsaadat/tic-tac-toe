'use client';

import { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from './GameBoard.module.css';

const Confetti = dynamic(() => import('react-confetti'), { ssr: false });

interface GameBoardProps {
  player1Name: string;
  player2Name: string;
  onGameEnd?: (winner: string | null) => void;
}

interface ScoreType {
  [key: string]: number;
}

const GameBoard: React.FC<GameBoardProps> = ({ player1Name, player2Name, onGameEnd }) => {
  const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [scores, setScores] = useState<ScoreType>(() => {
    // Initialize scores from localStorage if available
    const savedScores = localStorage.getItem('ticTacToeScores');
    if (savedScores) {
      const parsedScores = JSON.parse(savedScores);
      // Only use saved scores if player names match
      if (parsedScores[player1Name] !== undefined && parsedScores[player2Name] !== undefined) {
        return parsedScores;
      }
    }
    // Otherwise initialize new scores
    return {
      [player1Name]: 0,
      [player2Name]: 0,
    };
  });
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedSquare, setSelectedSquare] = useState<number>(-1);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);
  const [scoreUpdated, setScoreUpdated] = useState<string | null>(null);

  useEffect(() => {
    // Save scores to localStorage whenever they change
    localStorage.setItem('ticTacToeScores', JSON.stringify(scores));
  }, [scores]);

  useEffect(() => {
    // Reset board when component key changes (new game)
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinningLine(null);
  }, []);

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

  const handleClick = useCallback((index: number) => {
    if (board[index] || calculateWinner(board)[0]) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);

    const [winner, line] = calculateWinner(newBoard);
    if (winner) {
      const winnerName = winner === 'X' ? player1Name : player2Name;
      setWinningLine(line);
      setScores(prev => ({
        ...prev,
        [winnerName]: prev[winnerName] + 1
      }));
      setScoreUpdated(winnerName);
      setTimeout(() => setScoreUpdated(null), 500);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
      onGameEnd?.(winnerName);
    } else if (!newBoard.includes(null)) {
      onGameEnd?.(null);
    } else {
      setIsXNext(!isXNext);
    }
  }, [board, isXNext, player1Name, player2Name, onGameEnd]);

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
          handleClick(selectedSquare);
        }
        break;
    }
  }, [selectedSquare, handleClick]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const currentPlayer = isXNext ? player1Name : player2Name;
  const [winner] = calculateWinner(board);
  const isDraw = !winner && !board.includes(null);

  const status = winner
    ? `Winner: ${winner === 'X' ? player1Name : player2Name}`
    : isDraw
    ? 'Game Draw!'
    : `Next player: ${currentPlayer} (${isXNext ? 'X' : 'O'})`;

  return (
    <div className={styles.container}>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
        />
      )}
      
      <div className={styles.scoreBoard}>
        <div className={styles.playerScore}>
          <span className={styles.playerName}>{player1Name} (X)</span>
          <span className={`${styles.score} ${scoreUpdated === player1Name ? styles.scoreUpdated : ''}`}>
            {scores[player1Name]}
          </span>
        </div>
        <div className={styles.playerScore}>
          <span className={styles.playerName}>{player2Name} (O)</span>
          <span className={`${styles.score} ${scoreUpdated === player2Name ? styles.scoreUpdated : ''}`}>
            {scores[player2Name]}
          </span>
        </div>
      </div>

      <div className={`${styles.status} ${winner ? styles.winner : ''}`}>{status}</div>
      
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
                ${!square && !winner ? styles.hoverable : ''}`}
              onClick={() => handleClick(index)}
              onFocus={() => setSelectedSquare(index)}
              onBlur={() => setSelectedSquare(-1)}
              disabled={!!square || !!winner}
              aria-label={`Square ${index + 1}${square ? ` marked with ${square}` : ''}`}
              role="gridcell"
            >
              {square && (
                <div className={`${styles.mark} ${winningLine?.includes(index) ? styles.winningMark : ''}`}>
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