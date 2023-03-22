"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, []);

  const renderThemeChanger = () => {
    if (theme === "light") {
      return (
        <Image
          src="/moonIcon.svg"
          alt="dark icon"
          width={500}
          height={500}
          className="w-14 sm:w-16"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
    return (
      <Image
        src="/sunIcon.svg"
        alt="light icon"
        width={500}
        height={500}
        className="w-14 sm:w-16"
        role="button"
        onClick={() => setTheme("light")}
      />
    );
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01 opacity-50 sm:opacity-100" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-14`}
      >
        <Link className="z-0" href="/">
          <Image
            src="/IrruptionLab.svg"
            alt="Irruption Lab"
            width={350}
            height={350}
          />
        </Link>
        {renderThemeChanger()}
      </div>
    </motion.nav>
  );
};

export default Navbar;
