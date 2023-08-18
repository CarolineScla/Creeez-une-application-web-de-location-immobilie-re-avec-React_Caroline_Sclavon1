import React from 'react'
import './Navbar.scss';

function navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar_logo'>
        <img src='logo.png' alt='logo'/>
      </div>
     <ul className='navbar_menu'>
        <li>
        <a href='#'>Accueil</a>
        </li>
        <li>
        <a href='#'>A propos</a>
      </li>
    </ul>
    </nav>
  )
}

export default navbar;