"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import Image from "next/image";

const Hero = () => (
  <section className={`${styles.yPaddings} mt-[100px] sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="relative flex flex-col ml-[100px] lg:ml-[350px] mr-[10px] sm:ml-[250px]">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Building applications <br />
          for Web3 democratization
        </motion.h1>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative -mt-[100px] sm:-mt-[160px] sm:ml-[80px]"
      >
        <div className="absolute w-[50%] inset-0 gradient-IL-Logo" />
        <Image
          className="w-[75px] sm:w-[150px] lg:[250px]"
          src="/logo_IL.svg"
          alt="logo irruption lab"
          width={250}
          height={250}
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
