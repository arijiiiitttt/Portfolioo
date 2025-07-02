"use client"
import React, { useState, useEffect } from 'react';
import LoadingPg from './assets/Loading/LoadingPg';
import Main from './Main';



const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer); // Clear timeout if component unmounts
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingPg/>
      ) : (
        <Main/>
      )}
    </>
  );
};

export default Portfolio;
