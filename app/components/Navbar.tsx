"use client";

import { useState } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Two Players", href: "/two-players" },
  { name: "Play With System", href: "/play-with-system" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/two-players">Home</Link>
      </div>

      {/* Burger Menu Button */}
      <button 
        className={`${styles.burgerButton} ${isMenuOpen ? styles.open : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Links */}
      <div className={`${styles.links} ${isMenuOpen ? styles.show : ''}`}>
        <Link 
          href="/two-players" 
          className={pathname === '/two-players' || pathname === '/' ? styles.active : ''}
          onClick={() => setIsMenuOpen(false)}
        >
          Two Players
        </Link>
        <Link 
          href="/play-with-system" 
          className={pathname === '/play-with-system' ? styles.active : ''}
          onClick={() => setIsMenuOpen(false)}
        >
          Play With System
        </Link>
        <Link 
          href="/instructions" 
          className={pathname === '/instructions' ? styles.active : ''}
          onClick={() => setIsMenuOpen(false)}
        >
          Instructions
        </Link>
      </div>
    </nav>
  );
} 