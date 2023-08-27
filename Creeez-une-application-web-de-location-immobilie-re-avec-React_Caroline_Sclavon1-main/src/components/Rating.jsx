import StarFull from '../assets/StarFull.png';
import StarVide from '../assets/StarVide.png';
import '../styles/ratings.scss';

function Rating(rate){
    const stars = [1, 2, 3, 4, 5];

    return stars.map((star, index) =>
        rate.rating >= star ? (<img className="ratings__StarFull" src={StarFull} alt="" key={index} />) : (<img className="ratings__StarVide" src={StarVide} alt="" key={index} />)
    )
}

export default Rating;