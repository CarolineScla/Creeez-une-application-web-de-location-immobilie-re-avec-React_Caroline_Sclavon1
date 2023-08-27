import React, { useState } from 'react';
import ArrowRight from '../assets/arrow_right.png';
import ArrowLeft from '../assets/arrow_left.png';
import '../styles/slideshow.scss';


function Slideshow({imageSlider}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  //Image précedente
  const prevSlide = () => {
      setCurrentIndex(currentIndex - 1)
      if(currentIndex === 0)
          setCurrentIndex(imageSlider.length - 1)
  }

  //Image suivante
  const nextSlide = () => {
      setCurrentIndex(currentIndex + 1)
      if(currentIndex === imageSlider.length - 1)
          setCurrentIndex(0)
  }

  return (
      <div style={{backgroundImage : `url(${imageSlider[currentIndex]})`}} className='slider'>
          {imageSlider.length > 1 && 
              <>
              <img 
                  className="slider__arrow slider__arrow--arrowLeft" 
                  src={ArrowLeft} 
                  alt="Contenu précédent"  
                  onClick={prevSlide}
              />
                  <img 
                      className="slider__arrow slider__arrow--arrowRight"  
                      src={ArrowRight} 
                      alt="Contenu suivant"  
                      onClick={nextSlide}
                  />
                  <p className="slider__number">{currentIndex + 1} / {imageSlider.length}</p>
              </>
          } 
      </div>
  )
}

export default Slideshow;