import React from 'react';
import { Link } from 'react-router-dom'; 
import "../styles/Logement.scss";

function Logement({ data }) {
  return (
    <Link to={`/Logement/${data.id}`} className={`logement ${data.cover ? 'with-image' : ''}`}>
      {data.cover && <img src={data.cover} alt={data.title} className='cover-image' />}
      <div className='logement_title'>{data.title}</div>
    </Link>
  );
}

export default Logement;

