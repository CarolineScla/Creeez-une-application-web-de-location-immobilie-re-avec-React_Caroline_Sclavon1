import React from "react";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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