// Nav.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

function Nav( { isDarkMode } ) {
  const [isMenuOpen, setIsMenuOpen] = useState( false );

  return (
    <nav className={`nav ${isDarkMode ? 'dark' : ''}`}>
      <div className="nav-container">
  <Link to="/" className="logo-link">
  <div className="logo-text">
    <span className="logo-accent">WestLA</span>
    <span className="logo-main">Portraits</span>
  </div>
</Link>



        <button className="menu-toggle" onClick={() => setIsMenuOpen( !isMenuOpen )}>
          ☰
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen( false )}>Home</Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setIsMenuOpen( false )}>Portfolio</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen( false )}>About</Link>
          </li>
          <li>
            <Link to="/booking" onClick={() => setIsMenuOpen( false )}>Appointments</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
