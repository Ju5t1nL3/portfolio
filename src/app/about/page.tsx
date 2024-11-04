"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const About = () => {
  const pathname = usePathname();

  // State to control which set of panels is being shown
  const [currentIndex, setCurrentIndex] = useState(0);

  // Total number of panels and how many to show at a time
  const totalPanels = 7;
  const panelsToShow = 3;

  // Fun facts data
  const funFacts = [
    { title: "🎮 Gamer at Heart", description: "I love playing video games in my free time, especially strategy and puzzle games." },
    { title: "📚 Avid Reader", description: "I'm always reading something new, whether it's fiction or non-fiction." },
    { title: "🌎 Traveler", description: "I've traveled to over 10 countries and hope to visit many more in the future." },
    { title: "🎨 Creative Thinker", description: "I enjoy drawing and sketching in my spare time. It's a great way to relax and express creativity." },
    { title: "💻 Tech Enthusiast", description: "I'm always excited about learning new technologies and staying up-to-date with industry trends." },
    { title: "🏃‍♂️ Fitness Buff", description: "I love staying active by running and working out regularly." },
    { title: "🍕 Pizza Lover", description: "Pizza is my go-to comfort food!" }
  ];

  // Handle next/previous clicks
  const handleNext = () => {
    if (currentIndex < totalPanels - panelsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <div className="animation-container logo-shrink">
        {/* Logo */}
        <Link href="/" passHref>
          <div className="logo-symbols">
            <div className="j-symbol">J</div>
            <div className="l-symbol">L</div>
          </div>
        </Link>
      </div>

      {/* Top Navigation Buttons */}
      <div className="top-nav">
        <Link href="/about" legacyBehavior passHref>
          <a className={`nav-button ${pathname === '/about' ? 'active' : ''}`}>About</a>
        </Link>
        <Link href="/work" legacyBehavior passHref>
          <a className="nav-button">Work</a>
        </Link>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-button">
          Resume
        </a>
        <Link href="/contact" legacyBehavior passHref>
          <a className="nav-button">Contact</a>
        </Link>
      </div>

      {/* About Section */}
      {/* Heading */}
      <section className="about-section">
        <motion.h1
          className="about-heading"
          initial={{ opacity: 0, y: 50 }} // Start off-screen and invisible
          animate={{ opacity: 1, y: 0 }} // Animate into view
          transition={{ duration: 0.5, delay: 0.2 }} // Smooth animation with delay
        >
          About
        </motion.h1>

        {/* Blurb */}
        <motion.p
          className="about-blurb"
          initial={{ opacity: 0, y: 50 }} // Start off-screen and invisible
          animate={{ opacity: 1, y: 0 }} // Animate into view
          transition={{ duration: 0.5, delay: 0.4 }} // Smooth animation with delay
        >
          Hi! I'm Justin, a software engineering student at Texas A&M University. I have a passion for building things that make a difference in the world. When I'm not coding, you can find me exploring new technologies, reading, or enjoying outdoor activities.
        </motion.p>

        {/* Carousel for Fun Facts */}
        <div className="carousel-container">
          {/* Left Arrow */}
          {currentIndex > 0 && (
            <button onClick={handlePrev} className="carousel-arrow left-arrow">←</button>
          )}

          {/* Fun Facts Grid with Animation */}
          <motion.div 
            className="fun-facts-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {funFacts.slice(currentIndex, currentIndex + panelsToShow).map((fact, index) => (
              <motion.div 
                key={index} 
                className="fun-fact"
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: (index + 3) * 0.2 }} // Staggered animation
              >
                <h3>{fact.title}</h3>
                <p>{fact.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Arrow */}
          {currentIndex + panelsToShow < totalPanels && (
            <button onClick={handleNext} className="carousel-arrow right-arrow">→</button>
          )}
        </div>
      </section>

      {/* Social Media Icons */}
      <div className="social-icons">
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

      {/* Footer Text */}
      <footer className="footer-text">© 2024 Justin Le</footer>
    </>
 );
};

export default About;
