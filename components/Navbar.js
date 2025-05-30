// components/Navbar.js
import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        <i className="fas fa-tv"></i>
        <span>YuuStream</span>
      </div>
      <nav>
        <button
          className="mobile-menu-btn"
          id="mobileMenuBtn"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
        <ul id="navMenu" className={mobileOpen ? 'show' : ''}>
          {/* Menu items removed */}
        </ul>
      </nav>
    </header>
  );
}
