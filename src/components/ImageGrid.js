// src/components/ImageGrid.js
import React from 'react';

// Importing images from the assets folder
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

function ImageGrid() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="relative">
          <img 
            src={image} 
            alt={`img${index + 1}`} 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;
