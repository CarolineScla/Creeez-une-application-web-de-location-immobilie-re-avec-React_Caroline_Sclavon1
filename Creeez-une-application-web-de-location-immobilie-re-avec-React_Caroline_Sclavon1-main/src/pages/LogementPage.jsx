import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import '../styles/slideshow.scss';
import '../styles/Logement.scss'
import Navbar from '../components/Navbar';
import Slideshow from '../components/Slideshow.jsx';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
import logementData from '../logementsliste.json';
import Infos from '../components/Infos.jsx';
import Tags from '../components/Tags.jsx';
import Host from '../components/Host.jsx';
import Rating from '../components/Rating.jsx';

function LogementPage() {
  const { id } = useParams();
  const currentLogement = logementData.find(logement => logement.id === id);

  if (!currentLogement) {
    return <Navigate to="/Error" replace={true} />;
  }
  
  const { pictures, title, location, host, tags, rating, description, equipments } = currentLogement;

  return (
    <>
  <div className='logementPage'>
  <div className='main_conatiner'>
    <Navbar />
      <div className='main_logement'>
         <section className="slider_logement">
    <Slideshow imageSlider={pictures} />
         </section>
  
        <section className="logement_section">
             <div className="logement_content">
               <div className="logement_contentInfos">
    <Infos title={title} location={location} />
                </div>

            <div className="logement_Tags">
                {tags.map((tag, index) => (
                <Tags tag={tag} key={index} />
                 ))}
             </div>
             </div>

            <div className="infos_host">
            <div className="infos_host_content">
                <Host name={host.name} picture={host.picture} />
            </div>

            <div className="logement_ratings">
    <Rating rating={rating} />
            </div>
                </div>
         </section>

        <section className="collapse_logement">
            <div className="collapse_logement_content"> 
            <Collapse title="Description" content={description} />
            </div>
            <div className="collapse_logement_content">
            <Collapse title="Équipements" content={equipments} />
            </div>
        </section>
    </div>
    </div>

    <Footer />
  </div>

    </>
  );
}

export default LogementPage;
