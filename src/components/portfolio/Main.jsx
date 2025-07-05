"use client";
import React from 'react';
import { IoLogoGithub } from "react-icons/io5";
import { TiSocialInstagram } from "react-icons/ti";
import { BsLinkedin } from "react-icons/bs";
import { playMusic } from './playMusic';
import Skills from './Skills';
import About from './About';
import { playHover } from './playHover';
import Projects from './Projects';
import { motion } from 'framer-motion';
import Contact from './Contact';
import Footer from './Footer'; // Corrected typo
import FAQ from './FAQ';
import { useState, useEffect, useRef } from "react";
import FrontPg from './FrontPg';
import Timeline from './Timeline';

// Animation variants (adjust or disable if needed)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

// ------------------------Download PDF---------------------
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

const handleButtonClick = () => {
  playMusic();
};

const Main = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showToast, setShowToast] = useState(false); // State to control toast visibility
  const toastTimerRef = useRef(null); // Ref to store the toast timeout ID

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handler for when mouse enters the logo area
  const handleLogoMouseEnter = () => {
    // Clear any existing timer to prevent premature hiding if re-hovered quickly
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
    setShowToast(true); // Show the toast
    // Set a timer to hide the toast after 3 seconds
    toastTimerRef.current = setTimeout(() => {
      setShowToast(false);
    }, 3000); // Toast disappears after 3 seconds
  };

  // Handler for when mouse leaves the logo area
  const handleLogoMouseLeave = () => {
    // Clear the timer if mouse leaves before it expires, hide immediately
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
    setShowToast(false);
  };


  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the menu is open and the click is outside the nav element
      if (isMenuOpen && !event.target.closest('nav')) {
        closeMenu();
      }
    };

    // Add event listener for mousedown to detect clicks outside
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]); // Re-run effect if isMenuOpen changes

  return (
    <div className="w-full h-full flex flex-col gap-20"> {/* Increased gap to 20 */}
      {/*-------------------------Navbar------------------------*/}
      {/* The main navigation container, fixed at the top and centered horizontally */}
      <nav className="fixed w-full z-50 flex justify-center py-6 md:py-8" id="homePg">
        {/* The rounded light background container for the actual navbar content */}
        {/* Increased px-8 for mobile, px-5 for md and larger, to increase gap */}
        <div className="flex items-center justify-between px-6 gap-x-8 md:gap-x-0 lg:gap-x-0 py-3 rounded-full bg-white shadow-lg border border-gray-200 max-w-fit md:px-5">
          {/* Logo/Home link section */}
          <a
            href="#homePg"
            className="flex items-center group relative mr-6"
            onClick={closeMenu}
            onMouseEnter={handleLogoMouseEnter} // Show toast on mouse enter
            onMouseLeave={handleLogoMouseLeave} // Hide toast on mouse leave
          >
            <img
              src="./logos/a.png" // Path to your logo image
              className="h-12 w-10 md:h-12 md:w-12 transform transition-transform duration-500 group-hover:rotate-180 rounded-full" // Larger logo on all screens
              alt="logo"
            />
            {/* Toast message for logo, visible on hover for larger screens, positioned below and ensures text fits */}
            <span
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 text-gray-800 text-sm bg-gray-100 bg-opacity-90 px-5 py-3 rounded-lg shadow-xl hidden md:block max-w-sm text-center
                        transition-opacity duration-300 ${showToast ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            // pointer-events-none prevents the toast from blocking clicks when hidden
            > 👋🏼
            </span>
          </a>

          {/* Desktop and Tablet Navigation Items - hidden on small screens, visible from medium screens up */}
          <div className="hidden md:flex items-center space-x-10 text-gray-800 text-xl font-light">
            <a href="#aboutt" onClick={closeMenu} className="hover:text-gray-600 transition-colors">About</a>
            <a href="#projectt" onClick={closeMenu} className="hover:text-gray-600 transition-colors">Projects</a>

            <a href="/underprocess" onClick={closeMenu} className="hover:text-gray-600 transition-colors">Blog</a>
            <a href="#faqq" onClick={closeMenu} className="hover:text-gray-600 transition-colors">FAQs</a>
          </div>

          {/* Desktop and Tablet Email Button - hidden on small screens, visible from medium screens up */}
          <div className="hidden md:block ml-10">
            <a
              href="#contactt"
              className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-black transition-colors "
              // onMouseEnter={playHover} // Commented out due to unresolved dependency
              onClick={closeMenu} // Close menu on click
            >
              Contact Me
            </a>
          </div>

          {/* Hamburger Menu Icon for Mobile - visible on small screens, hidden from medium screens up */}
          <div className="md:hidden z-50">
            <button onClick={toggleMenu} aria-label="Toggle menu" className="text-gray-800">
              {isMenuOpen ? (
                // 'X' icon when menu is open (using inline SVG)
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                // Hamburger icon when menu is closed (using inline SVG)
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Overlay - slides in/out based on 'isMenuOpen' state */}
          <div className={`md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
            <ul className="flex flex-col gap-10 text-3xl font-light text-center text-gray-800">
              {/* Mobile navigation links */}
              <li className="my-4">
                <a href="#aboutt" onClick={closeMenu} className="hover:text-gray-700 transition-colors">About</a>
              </li>
              <li className="my-4">
                <a href="#projectt" onClick={closeMenu} className="hover:text-gray-700 transition-colors">Projects</a>
              </li>
              <li className="my-4">
                <a href="/underprocess" onClick={closeMenu} className="hover:text-gray-700 transition-colors">Blog</a>
              </li>
              <li className="my-4">
                <a href="#faqq" onClick={closeMenu} className="hover:text-gray-700 transition-colors">FAQs</a>
              </li>
              {/* Mobile Email Button */}
              <li className="my-4">
                <a
                  href="mailto:ihyaet@gmail.com"
                  className="text-2xl bg-gray-800 font-semibold text-white px-10 py-4 rounded-full block mt-8"
                  // onMouseEnter={playHover} // Commented out due to unresolved dependency
                  onClick={closeMenu} // Close menu on click
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/*----------------------------Header------------------------*/}
      {/*-------------------------First Page------------------------*/}
       <motion.div
        // className="min-h-screen bg-white flex flex-col items-center justify-center p-4 font-inter"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >

        <FrontPg />
      </motion.div> 
<div className='h-[3vh]'></div>

      {/*----------------------------About Page------------------------*/}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInVariants}
        className=" mt-30 md:mt-22 lg:mt-18 "
        id='aboutt'// Increased margin-top to create a larger gap
      >
        <About />


      </motion.div>

      {/*----------------------------Skills------------------------*/}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <div id='skillss'>
            <Skills />
          </div>
        </motion.div>
      </motion.div>






      {/*----------------------------Projects------------------------*/}
      <motion.div
        className='min-h-screen flex flex-col place-items-center py-10 md:py-5 lg:py-16'
        id='projectPg'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto mt-3 px-4 text-center">
          <span className="inline-block bg-black text-white  px-4 py-1 text-sm rounded-lg font-semibold">
            My Projects
          </span>
        </div>
        <motion.div
          className='text-center text-[1.15rem] md:text-[1.8rem] px-2 md:px-6 lg:text-[2.5rem] lg:px-10 font-bold '
          variants={itemVariants}
        >
          <h1 className='popBlack tracking-tighter' id='projectt'>Projects I have Worked On</h1>
        </motion.div>
        <div className='text-center'>
          <p className="mt-1 text-base sm:text-lg tracking-tight leading-relaxed text-gray-600 dark:text-gray-300">
            I've worked on a variety of projects, from simple websites to complex web applications. Here<br /> are a few of my favorite ones
          </p>
        </div>

        <motion.div
          className='flex p-9 items-center justify-center'
          variants={itemVariants}
        >

          <Projects />
        </motion.div>
      </motion.div>




      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <div id='hacks'>
            <div className="max-w-4xl mx-auto mt-3 px-4 text-center">
              <span className="inline-block bg-black text-white  px-4 py-1 text-sm rounded-lg font-semibold">
                Hackathons
              </span>
              <motion.div
                className='text-center text-[1.15rem] md:text-[1.8rem] px-2 md:px-6 lg:text-[2.5rem] lg:px-10 font-bold '
                variants={itemVariants}
              >
                <h1 className='popBlack tracking-tighter' id='projectt'>I like building things</h1>
              </motion.div>
              <p className="mt-1 text-base sm:text-lg tracking-tight leading-relaxed text-gray-600 dark:text-gray-300">
                During my time in my college, I attended 2+ hackathons. People from around the colleges would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.
              </p>
            </div>
<Timeline/>
          </div>
        </motion.div>
      </motion.div>




      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <div id='faqq'>
            <FAQ />
          </div>
        </motion.div>
      </motion.div>

      {/*----------------------------------------------------*/}


      {/*----------------------------Contact------------------------*/}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <div id='contactt'>
            <Contact />
          </div>


        </motion.div>
      </motion.div>




      {/*-----------------------------Footer--------------------------*/}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <div id='footerr'>
            <Footer />
          </div>

        </motion.div>
      </motion.div>

    </div>
  )
}

export default Main
