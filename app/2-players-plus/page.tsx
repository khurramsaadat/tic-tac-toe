'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import DevelopmentModal from '../components/DevelopmentModal';
import AdvancedGameBoard from '../components/AdvancedGameBoard';

export default function MultiplayerPage() {
  const [showModal, setShowModal] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    setGameStarted(true);
  };

  const handleGameEnd = () => {
    // Show modal again when game ends
    setShowModal(true);
    setGameStarted(false);
  };

  return (
    <main className={styles.container}>
      <DevelopmentModal isOpen={showModal} onClose={handleCloseModal} />
      {gameStarted && (
        <AdvancedGameBoard
          onGameEnd={handleGameEnd}
          player1Name="Player 1"
          player2Name="Player 2"
        />
      )}
    </main>
  );
} 