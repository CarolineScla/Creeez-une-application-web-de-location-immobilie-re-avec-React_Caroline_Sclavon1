import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

function Navbar() {
  return (
<nav className='navbar'>
  <div className='navbar_logo'>
    <img src='logo.png' alt='logo'/>
  </div>
  <ul className='navbar_menu'>
    <li>
      <Link exact="true" to='/'>Accueil</Link>
    </li>
    <li>
      <Link to='/About'>A propos</Link>
    </li>
  </ul>
</nav>
  )
}

export default Navbar;