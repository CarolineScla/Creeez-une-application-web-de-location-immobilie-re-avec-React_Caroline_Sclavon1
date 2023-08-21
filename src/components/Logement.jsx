import React from 'react';
import "../styles/Logement.scss";

function Logement({ data }) {
  return (
    <div className='Logement'>
      <img src={data.cover} alt={data.title} className='cover-image' />
      <div className='Logement'>{data.title}</div>
    </div>
  );
}

export default Logement;
