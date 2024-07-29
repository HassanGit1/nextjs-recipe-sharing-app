'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import burgerImg from '@/assets/burger.jpg';
import friesImg from '@/assets/fries.jpg';
import pastaImg from '@/assets/pasta.jpg';
import saladImg from '@/assets/salad.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import wrapImg from '@/assets/wrap.jpg';

const images = [
  { image: burgerImg, alt: 'A delicious, juicy burger' },
  { image: friesImg, alt: 'A delicious, spicy curry' },
  { image: pastaImg, alt: 'Steamed dumplings' },
  { image: saladImg, alt: 'Mac and cheese' },
  { image: pizzaImg, alt: 'A delicious pizza' },
  { image: wrapImg, alt: 'A delicious schnitzel' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative w-full h-full rounded-2xl overflow-hidden shadow-2xl'>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000
            ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
// ? classes.active : ''  -rotate-6 ease-in-out opacity-0