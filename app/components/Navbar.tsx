"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/" className={styles.homeLink}>
            <FaHome className={styles.homeIcon} />
          </Link>
          <Link href="/">
            <span className={styles.logoText}>
              <span className={styles.black}>tic</span>
              <span className={styles.grey}>tac</span>
              <span className={styles.black}>toe</span>
            </span>
          </Link>
        </div>
        <button 
          className={styles.menuButton} 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <div className={`${styles.menuIcon} ${isOpen ? styles.open : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div 
          className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}
          role="navigation"
        >
          <Link 
            href="/2-players" 
            onClick={closeMenu}
            aria-current={pathname === '/' || pathname === '/2-players' ? 'page' : undefined}
          >
            2 PLAYERS
          </Link>
          <Link 
            href="/play-with-system" 
            onClick={closeMenu}
            aria-current={pathname === '/play-with-system' ? 'page' : undefined}
          >
            PLAY WITH SYSTEM
          </Link>
          <Link 
            href="/instructions" 
            onClick={closeMenu}
            aria-current={pathname === '/instructions' ? 'page' : undefined}
          >
            INSTRUCTIONS
          </Link>
        </div>
      </nav>
      <div 
        className={`${styles.overlay} ${isOpen ? styles.active : ''}`}
        onClick={closeMenu}
        role="presentation"
      />
    </>
  );
};

export default Navbar; 