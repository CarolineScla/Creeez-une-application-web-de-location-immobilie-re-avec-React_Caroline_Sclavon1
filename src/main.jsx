import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import About from './pages/About.jsx';



ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/error' element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/error" />} /> // si page inexistante, redirection vers /error
      </Routes>
    </Router>
  </React.StrictMode>,
document.getElementById('root')
)

