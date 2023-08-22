import "../styles/host.scss";


function Host({name, picture}) {
    return (
      //Split de la data name pour le nom et le prénom
      <>
      <h3 className="accommodation__contentHostRatings--host--title"><span>{name.split(' ')[0]}</span> <span>{name.split(' ')[1]}</span></h3>
      <img className="accommodation__contentHostRatings--host--picture" src={picture} alt={`avatar de ${name}`} />
      </>
    )
  }
  
  export default Host;