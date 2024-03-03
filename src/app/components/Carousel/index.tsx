"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const imageNames = ["comida1", "comida2", "comida3", "comida4"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {imageNames.map((image, index) => (
        <Image
          key={index}
          src={`${image}.png`}
          alt={`Carousel Image ${index + 1}`}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default Carousel;
