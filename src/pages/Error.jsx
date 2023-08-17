import React from "react";
import { Link } from 'react-router-dom';
import Header from '../../header/Header.jsx';
import Footer from '../../Footer.jsx';

function Error() {
    return (
        <div className='error-page'>
            <Header />
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