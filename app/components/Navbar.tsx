"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/logo.png" alt="Tic Tac Toe" width={40} height={40} />
        </Link>
      </div>
      <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
        <div className={`${styles.menuIcon} ${isOpen ? styles.open : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        <Link href="/" onClick={toggleMenu}>Two Players</Link>
        <Link href="/instructions" onClick={toggleMenu}>Instructions</Link>
      </div>
    </nav>
  );
};

export default Navbar; 