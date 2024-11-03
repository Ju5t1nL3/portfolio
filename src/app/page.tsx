"use client";

import React, { useEffect } from 'react';

const Page = () => {

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
          }, 2000); // Time before moving logo

        }, 3000); // Time before reversing animation

      }, 2000); // Time before revealing 'ustin' and 'e'

    }, 2000); // Time before transitioning from π-like symbol
 }, []);

 return (
    <div className="animation-container">
      {/* Initial π-like symbol */}
      <div className="logo-symbols">
        <div className="j-symbol">J
          <div className="ustin-text">ustin</div>
        </div>
        <div className="l-symbol">L
          <div className="e-text">e</div>
        </div>
      </div>
    </div>
 );
};

export default Page;
