'use client';

import Link from 'next/link';
import styles from './page.module.css';

export default function InstructionsPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>How to Play Tic-Tac-Toe</h1>
      
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Game Rules</h2>
          <ul>
            <li>The game is played on a 3x3 grid</li>
            <li>Two players take turns: X and O</li>
            <li>The first player to get 3 of their marks in a row (horizontally, vertically, or diagonally) wins</li>
            <li>When all squares are filled and no player has won, the game is a draw</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>How to Play</h2>
          <ol>
            <li>Enter player names (or use default names)</li>
            <li>First player plays as X, second player as O</li>
            <li>Click any empty square to place your mark</li>
            <li>Take turns until someone wins or the game is a draw</li>
            <li>Click "Play Again" to start a new game</li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2>Tips</h2>
          <ul>
            <li>Try to block your opponent from getting three in a row</li>
            <li>The center square is strategically important</li>
            <li>Watch for diagonal winning opportunities</li>
            <li>Plan two moves ahead</li>
          </ul>
        </section>

        <div className={styles.buttons}>
          <Link href="/two-players" className={styles.playButton}>
            Play Two Players Mode
          </Link>
          <Link href="/" className={styles.homeButton}>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
} 