import React from 'react';
import "../styles/LogementGrid.scss";
import Logement from '../components/Logement.jsx';
import logementData from '../logementsliste.json'; 

function LogementGrid() {
  return (
    <div className='grid'>
      {logementData.map(logement => (
        <Logement key={logement.id} data={logement} />
      ))}
    </div>
  );
}

export default LogementGrid;
