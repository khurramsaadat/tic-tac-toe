'use client';

import { useState } from 'react';
import GameBoard from '../components/GameBoard';
import PlayerForm from '../components/PlayerForm';
import styles from './TwoPlayers.module.css';

export default function TwoPlayersPage() {
  const [player1Name, setPlayer1Name] = useState<string>('');
  const [player2Name, setPlayer2Name] = useState<string>('');
  const [gameStarted, setGameStarted] = useState(false);
  const [gameKey, setGameKey] = useState(0);

  const handleStartGame = (p1Name: string, p2Name: string) => {
    setPlayer1Name(p1Name);
    setPlayer2Name(p2Name);
    setGameStarted(true);
  };

  const handleGameEnd = () => {
    // Increment the key to reset the board but keep player names
    setGameKey(prev => prev + 1);
  };

  return (
    <div className={styles.container}>
      {!gameStarted ? (
        <PlayerForm onStart={handleStartGame} />
      ) : (
        <GameBoard
          key={gameKey}
          player1Name={player1Name}
          player2Name={player2Name}
          onGameEnd={handleGameEnd}
        />
      )}
    </div>
  );
} 