import StarFull from '../assets/StarFull.png';
import StarVide from '../assets/StarVide.png';
import '../styles/ratings.scss';

function Rating(rate){
    const stars = [1, 2, 3, 4, 5]; //Déclare un tableau stars qui contient les valeurs de 1 à 5. 

    return stars.map((star, index) =>  //Utilise la méthode map pour parcourir le tableau stars | Key index : unique pour chaque élément généré dans la boucle map, ce qui aide React à suivre les changements et optimise le rendu.
        rate.rating >= star ? //Vérifie si la note donnée (rate.rating) est supérieure ou égale à la valeur de star
        (<img className="ratings__StarFull" src={StarFull} alt="" key={index} />) : (<img className="ratings__StarVide" src={StarVide} alt="" key={index} />)
    )
}

export default Rating;