import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ── Scroll detection for glass effect ── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`raid-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">

        {/* ── Logo ── */}
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src="/RAID_logo.jpeg" alt="RAID" className="nav-logo-img" />
          <span className="nav-logo-text">RAID</span>
        </Link>

        {/* ── Desktop links ── */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/teams">Team</Link>
          <Link to="/Alumni">Alumni</Link>
          <Link to="/achievements">Achievements</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/contactus" className="nav-cta">Contact</Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="nav-hamburger"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(prev => !prev)}
        >
          <span className={`hamburger-line${isOpen ? ' open' : ''}`} />
          <span className={`hamburger-line${isOpen ? ' open' : ''}`} />
          <span className={`hamburger-line${isOpen ? ' open' : ''}`} />
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <div className={`nav-mobile${isOpen ? ' open' : ''}`} aria-hidden={!isOpen}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/projects" onClick={closeMenu}>Projects</Link>
        <Link to="/teams" onClick={closeMenu}>Team</Link>
        <Link to="/Alumni" onClick={closeMenu}>Alumni</Link>
        <Link to="/achievements" onClick={closeMenu}>Achievements</Link>
        <Link to="/blogs" onClick={closeMenu}>Blogs</Link>
        <Link to="/contactus" onClick={closeMenu}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
