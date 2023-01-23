"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import Image from "next/image";

const Hero = () => (
  <section className={`${styles.yPaddings} mt-0 sm:mt[100] sm:pl-20 pl-10`}>

<motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
<div className="flex flex-row ">
  <div className="basis-1/4  ">
       <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
       
      >
        <div className=" gradient-IL-Logo" />
        <Image
          className="w-[75px] sm:w-[150px] align-middle justify-self-end"
          src="/logo_IL.svg"
          alt="logo irruption lab"
          width={250}
          height={250}
        />
      </motion.div>
  </div>
  <div className="basis-3/4 inline-block align-middle">
      <div className="">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Building applications <br />
          for Web3 democratization
        </motion.h1>
      </div>
  </div>
</div>
</motion.div>

  </section>
);

export default Hero;
