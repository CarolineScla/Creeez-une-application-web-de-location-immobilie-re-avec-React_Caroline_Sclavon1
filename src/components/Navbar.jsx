import React from 'react'
import './Navbar.css';

function navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar_logo'>
        <img src='logo.png' alt='logo'/>
      </div>
      <div>Accueil</div>
      <div>A propos</div>
    </nav>
  )
}

export default navbar;