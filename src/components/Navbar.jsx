import React from 'react'
import './Navbar.css';

function navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar_logo'>
        <img src='logo.png' alt='logo'/>
      </div>
      <div className='navbar_menu'>Accueil</div>
      <div className='navbar_menu'>A propos</div>
    </nav>
  )
}

export default navbar;