'use client';

import { useEffect } from 'react';
import styles from './style.module.scss';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function StickyCursor() {
  const cursorSize = 30;

  // Motion values for mouse x and y coordinates
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  // Smooth spring animation options
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  
  // Spring animations for smoother mouse movement
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  // Function to handle mouse movement
  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  // Add event listener for mouse movement
  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
    };
  }, []);

  return (
    <div className={styles.cursorContainer}>
      <motion.div 
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }} 
        className={styles.cursor}
      />
    </div>
  );
}
