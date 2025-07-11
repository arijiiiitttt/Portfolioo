import React from 'react'
import { playHover } from './playHover';



const handleButtonClick = () => {
  playMusic();
};
const downloadPDF = () => {
    const confirmed = window.confirm("Do you want to download the Resume📃??");
    if (confirmed) {
      const link = document.createElement('a');
      link.href = './path/to/your/file.pdf';
      link.download = 'Arijit Roy-s Resume📃.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };


const About = () => {
  return (
    <>
    <div
  className="h-110 py-10 pt flex flex-col justify-center items-center w-auto"
>
  {/* Section Heading */}
  <div className="text-center text-[1.3rem] md:text-[1.99rem] md:px-6 lg:text-[2.7rem] lg:px-10 popBlack font-bold bg-[#defbff]">
    <h1>Meet the Developer</h1>
  </div>

  {/* Content Section */}
  <div className="flex flex-col  md:flex-row lg:flex-row md:gap-x-6 w-2/3 lg:gap-x-8 md:p-6 items-center justify-center ">
    {/* Profile Image */}
    <img
      src="./logos/aa.jpg"
      className="rounded-full w-[18rem] md:w-[24.5rem] lg:w-[26rem] border-white lg:border-3 shadow-lg"
      alt="Developer Profile"
    />

    {/* Description and Buttons */}
    <div className="flex flex-col  items-center md:items-start justify-center text-center md:text-left mt-8 md:mt-0">
      
      {/* Name */}
      {/* Description */}
      <p className="text-left  text-sm md:text-base lg:text-lg text-gray-800 md:pr-6 lg:pr-8">
        an undergrad and coding enthusiast passionate about crafting intuitive frontend and full-stack projects. From debugging to designing sleek interfaces, I love turning ideas into seamless web experiences. Between college and late-night code sessions, I explore new tools, build creatively, and share what I learn. This site is my digital journal—filled with passion, pixels, and personal growth.

      </p>

      {/* Buttons */}
      <div className="flex flex-row gap-4 md:gap-6 font-medium mt-6">
        <button
          className="hover:bg-black bg-[#ff0000] px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-3 border-2 shadow-md border-white text-white rounded-lg text-sm md:text-base lg:text-xl transition-all"
          onMouseEnter={playHover}
          onClick={handleButtonClick}
        >
          Hire Me
        </button>
        <button
          className="hover:bg-black hover:text-white text-sm md:text-base lg:text-lg border-2 px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-3 shadow-md border-black rounded-lg transition-all"
          onMouseEnter={playHover}
          onClick={() => {
            handleButtonClick();
            downloadPDF();
          }}
        >
          View Resume
        </button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default About