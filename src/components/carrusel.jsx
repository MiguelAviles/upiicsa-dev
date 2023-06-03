import React, { useState } from 'react';

export function Carrusel ({Carousel}){
const Carousel = () => {
  const images = [
    'ruta-de-la-imagen-1',
    'ruta-de-la-imagen-2',
    'ruta-de-la-imagen-3'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  return (
    <div className="carousel flex items-center justify-center">
      <button className="carousel__control carousel__control--prev" onClick={prevImage}>
        Previous
      </button>
      <ul className="carousel__list">
        {images.map((image, index) => (
          <li
            key={index}
            className={`carousel__item ${index === currentImage ? 'carousel__item--active' : ''}`}
          >
            <img src={image} alt={`Imagen ${index + 1}`} />
          </li>
        ))}
      </ul>
      <button className="carousel__control carousel__control--next" onClick={nextImage}>
        Next
      </button>
    </div>
  );
};
}