import React from 'react';
import "../styles/About.scss";
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar'
import Collapse from '../components/Collapse.jsx'
import Banner from '../components/banner.jsx'
import bannerAbout from '../styles/bannerAbout.jpg';

function About(){
    return (
            <div className="about">
                <Navbar />
                <Banner backgroundImage={bannerAbout} alt="Banner de la page a propos" />
                    <div className="about_content">
                        <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
                                                            régulièrement vérifiées par nos équipes." />
                        <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                                                            perturbation du voisinage entraînera une exclusion de notre plateforme." />
                        <Collapse title="Service" content="Notre équipe est dédiée à fournir une assistance exceptionnelle à nos hôtes et voyageurs. Que vous ayez des questions, des préoccupations ou des besoins spécifiques, 
                                                            notre service client est là pour vous aider à chaque étape de votre voyage." />
                        <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                                                            locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
                    </div>
                <Footer />
            </div>
    )
}

export default About;