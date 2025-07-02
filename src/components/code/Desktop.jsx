"use client";
import React, { useEffect, useState } from 'react';
import Website from '../Website';
import MobileView from '../otherElements/MobileView';


const Desktop = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 768); 
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      {isMobile ? (
        <MobileView/>
      ) : (
        <Website /> 
      )}
    </>
  );
};

export default Desktop;
