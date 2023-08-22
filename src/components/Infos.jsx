import "../styles/infos.scss";

function Infos({title, location}) {
    return (
        <>
        <h1 className="logement--title">{title}</h1>
        <p className="logement--location">{location}</p>
        </>
      )
}

export default Infos;