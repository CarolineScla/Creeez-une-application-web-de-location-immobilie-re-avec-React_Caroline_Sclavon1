import React from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from '../components/Navbar.jsx';
import Banner from '../components/banner.jsx'
import LogementtGrid from "../components/LogementGrid.jsx";
import Content from "../components/Content.jsx";
import Logement from "../components/Logement.jsx";
import Footer from "../components/Footer.jsx";
import bannerHome from '../styles/bannerHome.jpg';
import logementData from '../logementsliste.json';
import '../styles/home.scss'

function Home() {
  return (
    <div className='container'>
        <div className='main_conatiner'>
      <Navbar />
      <Content>
        <Banner backgroundImage={bannerHome} alt="Banner de la page d'accueil" />
        <LogementtGrid> 
          {logementData.map(logement => (
            <Link to={`/FicheLogement/${logement.id}`} key={logement.id}>
              <Logement data={logement} />
            </Link>
          ))}
        </LogementtGrid>
      </Content>
      </div>
      <Footer /> 
    </div>
  )
}

export default Home;
