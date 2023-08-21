import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './pages/App.jsx';
import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <BrowserRouter>
        <App />
    </BrowserRouter>
    
);
// Informations sur la vitesse de chargement, la réactivité et l'expérience utilisateur de l'application.
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);