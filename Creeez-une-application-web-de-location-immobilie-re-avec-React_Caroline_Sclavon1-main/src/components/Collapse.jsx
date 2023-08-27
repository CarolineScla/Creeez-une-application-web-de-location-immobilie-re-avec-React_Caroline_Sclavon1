import React, { useState } from "react";
import "../styles/Collapse.scss";
import Arrow from '../assets/Arrow.png';


function Collapse({title, content}){ 
    //Utilisation du useState pour stocker l'état en false
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
            <h3 className="collapse__title" onClick={() => setIsOpen(!isOpen)}>
                {title}
                <img className={isOpen ? 'arrow arrow_up' : 'arrow arrow_down'} 
                     src={Arrow} 
                     alt="Contenu de la collapse" /> 
            </h3>

            <div className={isOpen ? "collapse__content--open" : "collapse__content--close"}>
                {isOpen && (
                    Array.isArray(content) ? content.map((item, index) => (
                            <p key={index}>{item}</p>
                    )): <p>{content}</p>
                )}
            </div>
        </div>
    )
}

export default Collapse;





