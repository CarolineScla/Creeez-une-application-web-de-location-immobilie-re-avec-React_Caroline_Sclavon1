import React from 'react'
import "./footer.scss";

function Footer() {
  return (
    <div className='footer'>
       <div className='footer_logo'>
          <img src='footer_logo.png' alt='logo footer'/>
       </div>
       <div className='footer_text'>© 2020 Kasa. All rights reserved
       </div>
    </div>
  )
}

export default Footer;