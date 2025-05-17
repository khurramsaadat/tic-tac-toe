'use client';

import styles from './page.module.css';

export default function Instructions() {
  return (
    <div className={styles.container}>
      <h1>How to Play Tic Tac Toe</h1>
      <div className={styles.instructions}>
        <section>
          <h2>Game Setup</h2>
          <ol>
            <li>Enter names for both players when prompted</li>
            <li>Player 1 will use &ldquo;X&rdquo; and Player 2 will use &ldquo;O&rdquo;</li>
            <li>The game board consists of a 3x3 grid</li>
          </ol>
        </section>

        <section>
          <h2>Gameplay</h2>
          <ol>
            <li>Players take turns placing their marks in empty squares</li>
            <li>Player 1 (X) goes first</li>
            <li>Click an empty square or use keyboard navigation to place your mark</li>
            <li>The game tracks scores for both players</li>
          </ol>
        </section>

        <section>
          <h2>Winning the Game</h2>
          <ol>
            <li>Get three of your marks in a row (horizontally, vertically, or diagonally)</li>
            <li>If all squares are filled and no player has won, the game is a draw</li>
            <li>The score is automatically updated after each game</li>
            <li>Start a new game to continue playing</li>
          </ol>
        </section>

        <section>
          <h2>Keyboard Controls</h2>
          <ul>
            <li>Use arrow keys to navigate the board</li>
            <li>Press Enter or Space to place your mark</li>
          </ul>
        </section>
      </div>
    </div>
  );
} 