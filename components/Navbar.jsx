'use client';

import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [theme, setTheme] = useState('dark');

  const renderThemeChanger = () => {
    if (theme === 'dark') {
      return (
        <SunIcon className="w-[6%] h-[6%] text-amber-500 object-contain" role="button" onClick={() => setTheme('light')} />
      );
    }
    return (
      <MoonIcon className="w-[6%] h-[6%] text-gray-900 object-contain" role="button" onClick={() => setTheme('dark')} />
    );
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <img
          src="/Irruption_Lab.png"
          alt="Irruption Lab"
          className="w-[30%] h-[30%] z-0"
        />
        {renderThemeChanger()}
      </div>
    </motion.nav>
  );
};

export default Navbar;
