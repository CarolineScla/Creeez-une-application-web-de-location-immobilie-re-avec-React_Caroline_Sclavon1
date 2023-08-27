import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.scss';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar_logo'>
        <img src='/logo.png' alt='logo'/>
      </div>
      <div className='navbar_menu'>
          <NavLink to='/' >Accueil</NavLink>
          <NavLink to='/About' >A propos</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
