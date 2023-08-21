import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Banner from '/Users/macos/Desktop/PROJETS/Créez une application web de location immobilière avec React_Caroline_Sclavon1/kasa_app/src/components/banner.jsx'
import AppartementGrid from "../components/LogementGrid.jsx";
import Content from "../components/Content.jsx";
import Appartement from "../components/Logement.jsx";
import Footer from "../components/Footer.jsx";


function App() {
  return (
    <div className='container'>
      <Navbar />
      <Content>
          <Banner />
          <AppartementGrid> 
          <Appartement />
          </AppartementGrid>
      </Content>
      <Footer /> 
    </div>
  )
}

export default App;
