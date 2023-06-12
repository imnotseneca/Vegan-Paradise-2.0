import { useState } from 'react';
import './header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="nav-bar">
        <a href="/">
          <img src="src\assets\vegan-logo.png" alt="vegan-logo" className='vegan-logo' />
        </a>
        <ul className={`nav-menu${isMenuOpen ? ' active' : ''}`}>
          <li>
            <a href="#products" className="nav-item" onClick={() => setMenuOpen(false)}>
              Products
            </a>
          </li>
          <li>
            <a href="#menu" className="nav-item" onClick={() => setMenuOpen(false)}>
              Menu
            </a>
          </li>
          <li>
            <a href="#aboutUs" className="nav-item" onClick={() => setMenuOpen(false)}>
              About us
            </a>
          </li>
        </ul>
        {isMenuOpen ? (
          <button className='nav-btn nav-close-btn' onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
        ) : (
          <button className='nav-btn' onClick={() => setMenuOpen(true)}>
            <FaBars />
          </button>
        )}
      </nav>
    </header>
  );
}
