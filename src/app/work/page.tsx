"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Work = () => {

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

 return (
  <>
    <div className="animation-container logo-shrink">
      {/* Initial π-like symbol */}
      <Link href = "/" passHref>
        <div className="logo-symbols">
          <div className="j-symbol">
            J
          </div>
          <div className="l-symbol">
            L
          </div>
        </div>
      </Link>
    </div>

    
    <>
      {/* Top Navigation Buttons */}
      <div className="top-nav">
        {/* Left Side Buttons */}
        <Link href="/about" legacyBehavior passHref>
          <a className="nav-button">About</a>
        </Link>
        <Link href="/work" legacyBehavior passHref>
          <a className={`nav-button ${pathname == '/work' ? 'active': ''}`}>Work</a>
        </Link>

        {/* Right Side Buttons */}
        <a href = "/resume.pdf" target = "_blank" rel = "noopenernoreferrer" className="nav-button">
          Resume
        </a>
        <Link href="/contact" legacyBehavior passHref>
          <a className="nav-button">Contact</a>
        </Link>
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
    
  </>
 );
};

export default Work;
