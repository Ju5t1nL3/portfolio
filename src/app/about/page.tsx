"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const About = () => {

 const pathname = usePathname();

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
          <a className={`nav-button ${pathname == '/about' ? 'active': ''}`}>About</a>
        </Link>
        <Link href="/work" legacyBehavior passHref>
          <a className="nav-button">Work</a>
        </Link>

        {/* Right Side Buttons */}
        <a href = "/resume.pdf" target = "_blank" rel = "noopenernoreferrer" className="nav-button">
          Resume
        </a>
        <Link href="/contact" legacyBehavior passHref>
          <a className="nav-button">Contact</a>
        </Link>
      </div>
      

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
      <footer className="footer-text">© 2024 Justin Le</footer>
    </>
    
  </>
 );
};

export default About;
