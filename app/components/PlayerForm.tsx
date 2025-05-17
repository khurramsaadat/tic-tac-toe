'use client';

import { useState } from 'react';
import styles from './PlayerForm.module.css';

interface PlayerFormProps {
  onStart: (player1Name: string, player2Name: string) => void;
}

const PlayerForm: React.FC<PlayerFormProps> = ({ onStart }) => {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStart(
      player1Name.trim() || 'Player 1',
      player2Name.trim() || 'Player 2'
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label htmlFor="player1">Player 1 (X)</label>
        <input
          type="text"
          id="player1"
          value={player1Name}
          onChange={(e) => setPlayer1Name(e.target.value)}
          placeholder="Enter Player 1 name"
          maxLength={20}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="player2">Player 2 (O)</label>
        <input
          type="text"
          id="player2"
          value={player2Name}
          onChange={(e) => setPlayer2Name(e.target.value)}
          placeholder="Enter Player 2 name"
          maxLength={20}
        />
      </div>
      <button type="submit" className={styles.startButton}>
        Start Game
      </button>
    </form>
  );
};

export default PlayerForm; 