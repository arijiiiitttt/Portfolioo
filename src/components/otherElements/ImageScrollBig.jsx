import React, { useEffect, useState } from 'react';

const ImageScrollBig = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = ['/emotes/img1.jpg', '/emotes/img2.jpg', '/emotes/img3.jpg', '/emotes/img4.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="flex items-center justify-center gap-6">

      {/* Rotating Image */}
      <div className="w-80 h-52 rounded-xl overflow-hidden shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300">
        <img
          src={images[currentImage]}
          alt="Visual"
          className="object-cover w-full h-full hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default ImageScrollBig;
