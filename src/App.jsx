import React from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import Banner from './components/banner/banner.jsx';
import AppartementGrid from "./components/appartementGrid/AppartementGrid.jsx";
import Main from "./components/main/Main.jsx";
import Appartement from "./components/appartement/Appartement.jsx";
// import Footer from "./footer/Footer.jsx";


function App() {
  return (
    <div>
      <Navbar />
      <Main>
          <Banner />
          <AppartementGrid> 
          <Appartement />
          </AppartementGrid>
      </Main>
      {/* <Footer />  */}
    </div>
  )
}

export default App;
