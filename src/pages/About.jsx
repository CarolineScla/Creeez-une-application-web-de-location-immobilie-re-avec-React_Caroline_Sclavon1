import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar'
import Collapse from '../components/Collapse.jsx'
import Banner from '../components/banner.jsx'
import imageAbout from '/Users/macos/Desktop/PROJETS/Créez une application web de location immobilière avec React_Caroline_Sclavon1/kasa_app/src/styles/imageAbout.png'

function About(){
    return (
        <main>
            <div className="about">
                <Navbar />
                <Banner BackgroundPicture= {imageAbout} alt="image About"/>
                    <div className="about__content">
                        <Collapse title="Fiabilité" content="Nous nous engageons à fournir des informations précises et à maintenir la qualité des annonces que vous consultez. Nos équipes s'assurent que les photos et les détails des logements sont à jour et authentiques." />
                        <Collapse title="Respect" content="Nous prônons un environnement respectueux et inclusif pour tous nos utilisateurs. Toute conduite allant à l'encontre de ces principes entraînera des mesures appropriées pour maintenir une expérience agréable pour chacun." />
                        <Collapse title="Service" content="Notre équipe est dédiée à fournir une assistance exceptionnelle à nos hôtes et voyageurs. Que vous ayez des questions, des préoccupations ou des besoins spécifiques, notre service client est là pour vous aider à chaque étape de votre voyage." />
                        <Collapse title="Sécurité" content="Nous nous engageons à fournir des logements sûrs et sécurisés. Nous effectuons des vérifications approfondies pour nous assurer que chaque logement répond aux normes de sécurité établies. De plus, nous organisons des ateliers sur la sécurité domestique pour nos hôtes, afin d'assurer un environnement sûr pour tous." />
                    </div>
                <Footer />
            </div>
        </main>
    )
}

export default About;