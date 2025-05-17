'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h3>Navigation</h3>
          <Link href="/two-players">Home</Link>
          <Link href="/play-with-system">Play With System</Link>
          <Link href="/instructions">Instructions</Link>
        </div>
        
        <div className={styles.section}>
          <h3>Connect</h3>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Tic Tac Toe. All rights reserved.</p>
      </div>
    </footer>
  );
} 