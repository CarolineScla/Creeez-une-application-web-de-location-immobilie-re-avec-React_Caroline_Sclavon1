import React from 'react';
import { Routes, Route } from 'react-router-dom'
import '../styles/App.scss'
import Error from '../pages/ErrorPage.jsx'
import About from '../pages/About.jsx'
import Home from '../pages/Home.jsx';
import LogementPage from '../pages/FicheLogement.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Logement/:id" element={<LogementPage />} /> 
      <Route path="/Error" element={<Error />} />
      <Route path="*" element={<Error />} />
    </Routes>
);
}

export default App;