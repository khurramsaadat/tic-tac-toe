'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './AdvancedGameBoard.module.css';
import SoundManager from '../utils/SoundManager';
import MuteButton from './MuteButton';

interface AdvancedGameBoardProps {
  player1Name: string;
  player2Name: string;
  onGameEnd?: (winner: string | null) => void;
}

interface ScoreType {
  [key: string]: number;
}

interface Mark {
  position: number;
  symbol: 'X' | 'O';
  timestamp: number;
}

const calculateWinner = (currentMarks: Mark[]): [string | null, number[] | null] => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  const boardState = Array(9).fill(null);
  currentMarks.forEach(mark => {
    boardState[mark.position] = mark.symbol;
  });

  for (const line of lines) {
    const [a, b, c] = line;
    if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
      return [boardState[a], line];
    }
  }
  return [null, null];
};

const AdvancedGameBoard: React.FC<AdvancedGameBoardProps> = ({ player1Name, player2Name, onGameEnd }) => {
  const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [scores, setScores] = useState<ScoreType>(() => ({
    [player1Name]: 0,
    [player2Name]: 0,
  }));
  const [selectedSquare, setSelectedSquare] = useState<number>(-1);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);
  const [scoreUpdated, setScoreUpdated] = useState<string | null>(null);
  const [gameState, setGameState] = useState<'playing' | 'draw' | 'won'>('playing');
  const [gameEnded, setGameEnded] = useState(false);
  const [marks, setMarks] = useState<Mark[]>([]);

  const [currentWinner, winningLineResult] = calculateWinner(marks);

  const getStatusMessage = useCallback(() => {
    if (currentWinner) {
      const winnerName = currentWinner === 'X' ? player1Name : player2Name;
      return (
        <div className={styles.winnerInfo}>
          <div className={styles.winnerTitle}>Winner!</div>
          <div className={`${styles.winnerName} ${currentWinner === 'X' ? styles.winnerX : styles.winnerO}`}>
            {winnerName}
          </div>
        </div>
      );
    }

    if (gameState === 'draw') {
      return (
        <div className={styles.winnerInfo}>
          <div className={styles.winnerTitle}>Game Draw!</div>
          <div className={styles.winnerName}>Well played, both!</div>
        </div>
      );
    }

    return null;
  }, [currentWinner, gameState, player1Name, player2Name]);

  const makeMove = useCallback((position: number) => {
    if (gameEnded || board[position]) {
      SoundManager.getInstance().playSound('invalid');
      return;
    }

    const currentSymbol = isXNext ? 'X' : 'O';
    const currentPlayerMarks = marks.filter(mark => mark.symbol === currentSymbol);

    let newMarks = [...marks];
    if (currentPlayerMarks.length >= 3) {
      // Remove the oldest mark for the current player
      const oldestMark = currentPlayerMarks.reduce((oldest, current) => 
        current.timestamp < oldest.timestamp ? current : oldest
      );
      newMarks = marks.filter(mark => mark !== oldestMark);
    }

    // Add the new mark
    newMarks.push({
      position,
      symbol: currentSymbol,
      timestamp: Date.now()
    });

    setMarks(newMarks);
    
    // Update the visual board state
    const newBoard = Array(9).fill(null);
    newMarks.forEach(mark => {
      newBoard[mark.position] = mark.symbol;
    });
    setBoard(newBoard);

    const [winner, line] = calculateWinner(newMarks);
    if (winner) {
      const winnerName = winner === 'X' ? player1Name : player2Name;
      SoundManager.getInstance().playSound('win');
      setWinningLine(line);
      setGameState('won');
      setGameEnded(true);
      setScores(prev => ({
        ...prev,
        [winnerName]: prev[winnerName] + 1
      }));
      setScoreUpdated(winnerName);
      if (onGameEnd) onGameEnd(winnerName);
    } else if (newMarks.length === 6) {
      SoundManager.getInstance().playSound('draw');
      setGameState('draw');
      setGameEnded(true);
      if (onGameEnd) onGameEnd(null);
    } else {
      SoundManager.getInstance().playSound('place');
      setIsXNext(!isXNext);
    }
  }, [board, gameEnded, isXNext, marks, onGameEnd, player1Name, player2Name]);

  const startNewGame = useCallback(() => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setSelectedSquare(-1);
    setWinningLine(null);
    setScoreUpdated(null);
    setGameState('playing');
    setGameEnded(false);
    setMarks([]);
  }, []);

  useEffect(() => {
    if (scoreUpdated) {
      const timer = setTimeout(() => setScoreUpdated(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [scoreUpdated]);

  return (
    <div className={styles.container}>
      <MuteButton />
      <div className={styles.scoreBoard}>
        <div className={styles.scoreContent}>
          <div className={`${styles.playerScore} ${currentWinner === 'X' ? styles.winningPlayer : ''}`}>
            <span className={styles.playerName}>{player1Name}</span>
            <span className={`${styles.score} ${scoreUpdated === player1Name ? styles.updated : ''}`}>
              {scores[player1Name]}
            </span>
          </div>
          <div className={`${styles.playerScore} ${currentWinner === 'O' ? styles.winningPlayer : ''}`}>
            <span className={styles.playerName}>{player2Name}</span>
            <span className={`${styles.score} ${scoreUpdated === player2Name ? styles.updated : ''}`}>
              {scores[player2Name]}
            </span>
          </div>
        </div>
        <MuteButton />
      </div>

      <div className={`${styles.status} ${gameState === 'won' ? styles.winner : ''} ${gameState === 'draw' ? styles.draw : ''}`}>
        {getStatusMessage()}
      </div>

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
          {board.map((square, i) => (
            <button
              key={i}
              className={`${styles.square} ${
                selectedSquare === i ? styles.selected : ''
              } ${winningLine?.includes(i) ? styles.winning : ''}`}
              onClick={() => makeMove(i)}
              onMouseEnter={() => !gameEnded && setSelectedSquare(i)}
              onMouseLeave={() => !gameEnded && setSelectedSquare(-1)}
              disabled={gameEnded || !!square}
              aria-label={`Square ${i + 1}${square ? ` marked with ${square}` : ''}`}
              role="gridcell"
            >
              {square && (
                <div className={`${styles.mark} ${winningLine?.includes(i) ? styles.winningMark : ''}`}>
                  <Image
                    src={`/${square === 'X' ? 'cross' : 'zero'}.svg`}
                    alt={square}
                    width={120}
                    height={120}
                    priority
                  />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {gameEnded && (
        <button 
          className={`${styles.newGameButton} ${gameState === 'won' ? styles.winnerButton : ''}`}
          onClick={startNewGame}
          aria-label="Start a new game"
        >
          Start New Game
        </button>
      )}
    </div>
  );
};

export default AdvancedGameBoard; 