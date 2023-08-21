import React from 'react';
import "../styles/LogementGrid.scss";
import Logement from '/Users/macos/Desktop/PROJETS/Créez une application web de location immobilière avec React_Caroline_Sclavon1/kasa_app/src/components/Logement.jsx';
import logementData from '/Users/macos/Desktop/PROJETS/Créez une application web de location immobilière avec React_Caroline_Sclavon1/kasa_app/src/logementsliste.json'; 

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
