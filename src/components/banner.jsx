import React from 'react';
import { useLocation } from 'react-router-dom';
import "../styles/banner.scss";

function Banner({ backgroundImage }) {
  const location = useLocation();

  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className='banner' style={bannerStyle}>
      {location.pathname !== '/About' && (    //si ne correspond pas à "/About" alors affichage du h1
        <h1>Chez vous, <br className="break-on-small-screens" />partout et ailleurs</h1>
      )}
    </div>
  );
}

export default Banner;
