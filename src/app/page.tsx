"use client";

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Page = () => {
  const [showNavAndIcons, setShowNavAndIcons] = useState(false); // State to control visibility
  const socialIconsRef = useRef<HTMLDivElement | null>(null);

 useEffect(() => {
    const jSymbol = document.querySelector('.j-symbol') as HTMLElement;
    const lSymbol = document.querySelector('.l-symbol') as HTMLElement;
    const ustinText = document.querySelector('.ustin-text') as HTMLElement;
    const eText = document.querySelector('.e-text') as HTMLElement;

    // Step 1 - Transition from π-like symbol to JL
    setTimeout(() => {
      jSymbol.classList.add('shrink-bar'); // Shrink the bar
      jSymbol.classList.add('move-j-left'); // Move J to left
      lSymbol.classList.add('move-l-right'); // Move L to right

      // Step 2 - Reveal 'ustin' and 'e'
      setTimeout(() => {
        ustinText.classList.add('show-ustin');
        eText.classList.add('show-e');

        // Step 3 - Reverse animation back to π-like symbol
        setTimeout(() => {
          ustinText.classList.remove('show-ustin');
          eText.classList.remove('show-e');
          jSymbol.classList.remove('shrink-bar');
          jSymbol.classList.remove('move-j-left');
          lSymbol.classList.remove('move-l-right');

          // Extend the bar back out when reverting
          jSymbol.classList.add('extend-bar');
          jSymbol.classList.add('move-j-right'); // Move J back right
          lSymbol.classList.add('move-l-left'); // Move L back left

          // Step 4 - Move everything into top-left corner after reversing
          setTimeout(() => {
            document.querySelector('.animation-container')?.classList.add('logo-shrink');
            // Show navigation buttons and social icons after animation is done
            setShowNavAndIcons(true); // Set state to true after animation completes
          }, 0); // Time before moving logo

        }, 2000); // Time before reversing animation

      }, 2000); // Time before revealing 'ustin' and 'e'

    }, 2000); // Time before transitioning from π-like symbol
 }, []);

 const handleContactClick = () => {
  // Scroll to social icons
  socialIconsRef.current?.scrollIntoView({ behavior: "smooth" });

  // Trigger animation (using Framer Motion)
  const iconContainer = document.querySelector('.social-icons');
  iconContainer?.classList.add('highlight');

  // Remove highlight after 2 seconds
  setTimeout(() => {
    iconContainer?.classList.remove('highlight');
  }, 2000); // Adjust time as necessary
};

 return (
  <>
    <div className="animation-container">
      {/* Initial π-like symbol */}
      <Link href = "/" passHref>
        <div className="logo-symbols">
          <div className="j-symbol">J
            <div className="ustin-text">ustin</div>
          </div>
          <div className="l-symbol">L
            <div className="e-text">e</div>
          </div>
        </div>
      </Link>
    </div>

    {showNavAndIcons && (
      <>
        <div className="container">
          {/* Title Animation */}
          <motion.h1
            className="title"
            initial={{ opacity: 0, y: 50 }} // Start off-screen and invisible
            animate={{ opacity: 1, y: 0 }} // Animate into view
            transition={{ duration: 1, ease: "easeOut" }} // Smooth animation
          >
            Hi, I&apos;m Justin.
          </motion.h1>

          {/* Subheading Animation */}
          <motion.h2
            className="subheading"
            initial={{ opacity: 0, y: 50 }} // Start off-screen and invisible
            animate={{ opacity: 1, y: 0 }} // Animate into view
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} // Delayed animation for subheading
          >
            I focus on software engineering with a purpose. Currently studying at Texas A&M, I&apos;m passionate about creating to improve the world surrounding me.
          </motion.h2>
        </div>
        {/* Top Navigation Buttons */}
        <div className="top-nav">
          {/* Left Side Buttons */}
          <Link href="/about" legacyBehavior passHref>
            <a className="nav-button">About</a>
          </Link>
          <Link href="/work" legacyBehavior passHref>
            <a className="nav-button">Work</a>
          </Link>

          {/* Right Side Buttons */}
          <a href = "/resume.pdf" target = "_blank" rel = "noopenernoreferrer" className="nav-button">
            Resume
          </a>
          <button onClick={handleContactClick} className="nav-button">Contact</button>
        </div>
        

        <div ref={socialIconsRef} className="social-icons">
          <a href="mailto:j622560@tamu.edu" target="_blank" rel="noopener noreferrer">
            <img src="/email.png" alt="Email" className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/justin-le-3a275a278/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" className="icon" />
          </a>
          <a href="https://github.com/Ju5t1nL3" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" className="icon" />
          </a>
        </div>
        <footer className="footer-text">© 2024 Justin Le</footer>
      </>
    )}
  </>
 );
};

export default Page;
