'use client';

import styles from './page.module.css';

export default function PlayWithSystemPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Play with System</h1>
      <p className={styles.message}>Coming Soon! This feature is under development.</p>
      <div className={styles.features}>
        <h2>Planned Features:</h2>
        <ul>
          <li>Play against AI opponent</li>
          <li>Multiple difficulty levels</li>
          <li>Smart move suggestions</li>
          <li>Game analysis</li>
        </ul>
      </div>
    </div>
  );
} 