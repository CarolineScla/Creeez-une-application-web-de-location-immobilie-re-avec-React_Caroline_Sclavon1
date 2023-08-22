import React, { Navigate } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/slideshow.scss';
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
    // Gérer la situation où le logement n'est pas trouvé
    return <Navigate to="/Error" replace={true} />;
  }
  
  const { pictures, title, location, host, tags, rating, description, equipments } = currentLogement;

  return (
    <>
      <Navbar />
      <div className='main__logement'>
        <section className="slider__logement">
          <Slideshow imageSlider={pictures} /> {/* Utilisez votre composant Slideshow ici */}
        </section>
        
        <section className="logement">
          <div className="logement__content">
            <div className="logement__contentInfos">
              <Infos title={title} location={location} />
            </div>

            <div className="logement__contentTags">
              {tags.map((tag, index) => (
                <Tags tag={tag} key={index} />
              ))}
            </div>
          </div>

          <div className="logement__contentHostRatings">
            <div className="logement__contentHostRatings--host">
              <Host name={host.name} picture={host.picture} />
            </div>

            <div className="logement__contentHostRatings--ratings">
              <Rating rating={rating} />
            </div>
          </div>
        </section>

        <div className="collapse__logement">
          <div className="collapse__logement--content"> 
            <Collapse title="Description" content={description} />
          </div>
          <div className="collapse__logement--content">
            <Collapse title="Équipements" content={equipments} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LogementPage;
