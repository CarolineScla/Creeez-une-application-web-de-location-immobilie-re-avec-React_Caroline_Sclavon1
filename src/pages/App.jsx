import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Logement from "../components/Logement.jsx";
import Error from '../pages/ErrorPage.jsx'
import About from '../pages/About.jsx'
import Home from '/Users/macos/Desktop/PROJETS/Créez une application web de location immobilière avec React_Caroline_Sclavon1/kasa_app/src/pages/Home.jsx';



function App() {
  return (
    <Routes>
            <Route path="/" element = { <Home /> } />
            <Route path="/Apropos" element = { <About /> } />
            <Route path="/Logement/:id" element = { <Logement /> } />
            <Route path="/Error" element = { <Error /> } />
            <Route path="*" element={ <Error /> } />
        </Routes>
  )
}

export default App;
