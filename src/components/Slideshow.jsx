import React, { useState } from 'react';
import ArrowRight from '/Users/macos/Desktop/PROJETS/Créez une application web de location immobilière avec React_Caroline_Sclavon1/kasa_app/src/assets/arrow_right.png';
import ArrowLeft from '/Users/macos/Desktop/PROJETS/Créez une application web de location immobilière avec React_Caroline_Sclavon1/kasa_app/src/assets/arrow_left.png';
import '../styles/slideshow.scss';

function Slideshow({ imageSlider }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageSlider.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageSlider.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='slider'>
      {imageSlider.length > 1 && (
        <>
          <img
            className='ArrowLeft'
            src={ArrowLeft}
            alt='Contenu précédent'
            onClick={prevSlide}
          />
          <img
            className='ArrowRight'
            src={ArrowRight}
            alt='contenu suivant'
            onClick={nextSlide}
          />
          <p className='slider__sliderCount'>
            {currentIndex + 1} / {imageSlider.length}
          </p>
        </>
      )}
      <div className='slider__images'>
        {imageSlider.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`slider__image ${
              index === currentIndex ? 'active' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;

