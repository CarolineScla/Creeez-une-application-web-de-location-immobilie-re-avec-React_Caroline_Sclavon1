import React from "react";
import { Link } from 'react-router-dom';
import Navbar from '/Users/macos/Desktop/PROJETS/Créez une application web de location immobilière avec React_Caroline_Sclavon1/kasa_app/src/components/Navbar.jsx';
import Footer from '/Users/macos/Desktop/PROJETS/Créez une application web de location immobilière avec React_Caroline_Sclavon1/kasa_app/src/components/Footer.jsx';
import '../styles/Error.scss'

function Error() {
    return (
        <div className='error-page'>
            <Navbar />
            <div className="error-section">
                <span className="error-number">404</span>
                <p>Ooups! la page que vous demandez n'existe pas!</p>
                <div className='error-link'>
                    <Link to="/">Retourner sur la page d'accueil</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Error;