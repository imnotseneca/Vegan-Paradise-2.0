import { useState } from 'react';
import './header.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdOutlineRestaurantMenu } from 'react-icons/md'

export default function Header(props) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // eslint-disable-next-line react/prop-types
  const navItems = props.headerData.map(element => {
    return (
      <>
        <MdOutlineRestaurantMenu />
        <li key={element.id} className='navbar-item'>
        <a href={element.path} className="navbar-link" onClick={() => setMenuOpen(false)}>
          {element.title}
        </a>
        </li>
        </>
  )}) 
  
  return (
    <header>
      <nav className={`nav-bar ${isMenuOpen ? 'nav-bar-open' : ''}`}>
        {!isMenuOpen ? <a href="/">
          <img src="https://res.cloudinary.com/dd8ikgzov/image/upload/v1686597831/Vegan-Paradise/vegan-logo_yvuv0t.png" alt="vegan-logo" className='vegan-logo' />
        </a> : null}
        <ul className={`nav-menu${isMenuOpen ? ' active' : ''}`}>
          {navItems}
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
