'use client';

import { useEffect } from 'react';
import styles from './style.module.scss';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Define the type for the props
interface RegCursorProps {
  regElement?: string; // Optional prop for reg element selector
}

export default function RegCursor({ regElement }: RegCursorProps) {
  const cursorSize = 15;

  // Motion values for mouse x and y coordinates
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
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
          left: mouse.x,
          top: mouse.y,
        }} 
        className={styles.cursor}
      />
    </div>
  );
}
