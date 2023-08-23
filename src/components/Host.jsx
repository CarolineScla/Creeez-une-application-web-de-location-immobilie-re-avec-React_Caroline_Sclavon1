import React from 'react';
import "../styles/host.scss";

function Host({ name, picture }) {
  return (
    <div className="host-container">
      <div className="host_title">
        <h3>
          <span>{name.split(' ')[0]}</span> <span>{name.split(' ')[1]}</span>
        </h3>
      </div>
      <img className="host_photo" src={picture} alt={`avatar de ${name}`} />
    </div>
  );
}

export default Host;
