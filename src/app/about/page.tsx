"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const About = () => {
  const pathname = usePathname();
  const socialIconsRef = useRef<HTMLDivElement | null>(null);

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

  // State to control which set of panels is being shown
  const [currentIndex, setCurrentIndex] = useState(0);

  // Total number of panels and how many to show at a time
  const totalPanels = 7;
  const panelsToShow = 3;

  // Fun facts data
  const funFacts = [
    { title: "Languages", 
      description: 
      <>
        <ul className="no-bullets">
          <li>
            <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
              <img src="/python.png" alt="Python" className='listpics' />
              <span className="list-links">&nbsp;&nbsp;Python</span>
            </a>
          </li>
          <li>
            <a href="https://www.java.com/en/" target="_blank" rel="noopener noreferrer">
              <img src="/java.png" alt="Java" className='listpics' />
              <span className="list-links">&nbsp;&nbsp;Java</span>
            </a>
          </li>
          <li>
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
              <img src="/typescript.png" alt="TypeScript" className='listpics' />
              <span className="list-links">&nbsp;&nbsp;TypeScript</span>
            </a>
          </li>
          <li>
            <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
              <img src="/javascript.png" alt="JavaScript" className='listpics' />
              <span className="list-links">&nbsp;&nbsp;JavaScript</span>
            </a>
          </li>
          <li>
            <a href="https://www.w3schools.com/sql/" target="_blank" rel="noopener noreferrer">
              <img src="/sql.png" alt="SQL" className='listpics' />
              <span className="list-links">&nbsp;&nbsp;SQL</span>
            </a>
          </li>
          <li>
            <a href="https://html.spec.whatwg.org/" target="_blank" rel="noopener noreferrer">
              <img src="/html.png" alt="HTML" className='listpics' />
              <span className="list-links">&nbsp;&nbsp;HTML</span>
            </a>
          </li>
          <li>
            <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noopener noreferrer">
              <img src="/css.png" alt="CSS" className='listpics' />
              <span className="list-links">&nbsp;&nbsp;CSS</span>
            </a>
          </li>
        </ul>
      </> },
    { title: "Frameworks", 
      description: 
      <>
        <ul className="no-bullets">
          <li>
            <a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer">
              <img src="/pytorch.png" alt="PyTorch" className='listpics' />
              <span className="list-links">&nbsp;&nbsp;PyTorch</span>
            </a>
          </li>
          <li>
            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
              <img src="/nextjs.png" alt="Next.js" className='listpics' />
              <span className="list-links">&nbsp;&nbsp;Next.js</span>
            </a>
          </li>
          <li>
            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
              <img src="/react.png" alt="React" className='listpics' />
              <span className="list-links">&nbsp;&nbsp;React</span>
            </a>
          </li>
          <li>
            <a href="https://flask.palletsprojects.com/en/stable/" target="_blank" rel="noopener noreferrer">
              <img src="/flask.png" alt="Flask" className='listpics' />
              <span className="list-links">&nbsp;&nbsp;Flask</span>
            </a>
          </li>
          <li>
            <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
              <img src="/tailwind.png" alt="Tailwind CSS" className='listpics' />
              <span className="list-links">&nbsp;&nbsp;Tailwind CSS</span>
            </a>
          </li>
          <li>
            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
              <img src="/git.png" alt="Git" className='listpics' />
              <span className="list-links">&nbsp;&nbsp;Git</span>
            </a>
          </li>
        </ul>
      </> },
    { title: "Dog Lover", description: 
      <>
        <span className="space-better">I have 3 dogs! Like me, they are also all J names. Sadly they are all in Sugar Land right now :(</span>
        <img src="/dogs.png" alt="Dogs" className='dogs-pic'/>
      </>
      
    },
    { title: "Avid Reader", description:
      <>
      </> 
    },
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
        <button onClick={handleContactClick} className="nav-button">Contact</button>
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
          Hi there! I'm Justin -- a current Engineering Honors student at Texas A&M studying Computer Science with planned minors in Mathematics and Statistics (May 2028). However, I originally hail from Sugar Land, TX. I love to program in general, but my interests mainly
          lie within machine learning. With that said, you can often find me at a hackathon (I already plan to attend HackUTD!).
          <br></br>
          <br></br>
          Currently, I'm working on creating and training a model with computer vision by utilizing PyTorch. With a group of friends, I am also competing in the 
          <a href="https://ig.utexas.edu/texas-space-grant/2024/space-teams-university-lunar-search-rescue-design-challenge/" target="_blank" rel="noopener noreferrer" className="in-text-links"> Texas Lunar Search & Rescue Team competition, </a>
          where we just completed the first round!

        </motion.p>

        {/* Carousel for Fun Facts */}
        <div className="carousel-container">
          {/* Left Arrow */}
          {currentIndex > 0 && (
            <motion.button
              onClick={handlePrev}
              className="carousel-arrow left-arrow"
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: .2 }}
            >
              ←
            </motion.button>
          )}

          {/* Fun Facts Grid with Animation */}
          <motion.div 
            className="fun-facts-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
                <>{fact.description}</>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Arrow */}
          {currentIndex + panelsToShow < totalPanels && (
            <motion.button
              onClick={handleNext}
              className="carousel-arrow right-arrow"
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              →
            </motion.button>
          )}
        </div>
        {/* Carousel Dots */}
        <motion.div
          className="carousel-dots"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 1 }}
        >
          {Array(totalPanels).fill().map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index >= currentIndex && index < currentIndex + panelsToShow ? 'filled' : ''}`} 
            />
          ))}

        </motion.div>
      </section>

      {/* Social Media Icons */}
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

      {/* Footer Text */}
      <footer className="footer-text">© 2024 Justin Le</footer>
    </>
 );
};

export default About;
