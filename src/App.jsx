import React from 'react';
import Navbar from './components/Navbar.jsx';
import './components/Navbar.scss';
import Banner from './components/banner.jsx';
import './index.scss';
import AppartementGrid from "./components/AppartementGrid.jsx";
import Main from "./components/Main.jsx";


function App() {
  return (
    <div>
      <Navbar />
      <Main>
          <Banner />
          <AppartementGrid />
      </Main>
    </div>
  )
}

export default App;
