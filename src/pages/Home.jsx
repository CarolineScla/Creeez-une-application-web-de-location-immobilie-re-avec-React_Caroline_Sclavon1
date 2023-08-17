import React from "react";
import Header from '../components/Header/Header.jsx';
import Banner from "../components/banner/banner.jsx";
import Footer from './components/footer/Footer.jsx';
import Gallery from '../components/Gallery/Gallery.jsx';
import Cliffs from "../assets/sea_cliffs_view_1240.webp";

function Home() {
  return (
    <div className='homepage'>
      <Header />
        <Banner
          image={Cliffs}
          alt="vue d'un paysage avec mer et falaises"
          text="Chez vous, partout et ailleurs"
        />
        <Gallery />
      <Footer />
    </div>
  );
};

export default Home;