import React, { useState } from "react";

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
            <h3 className="collapse__title">
                {title}
                <img
                    className={isOpen ? "arrow arrow_up" : "arrow arrow_down"}
                    onClick={() => setIsOpen(!isOpen)}
                    alt="Contenu de la collapse"
                />
            </h3>

            {isOpen && (
                <div className="collapse__content">
                    {Array.isArray(content) ? (
                        content.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))
                    ) : (
                        <p>{content}</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Collapse;
