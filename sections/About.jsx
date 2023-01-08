'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Irruption Lab" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">The blockchain</span>{' '}is a complicated world, barely accessible for those who are not already in the ecosystem.
        How do we connect our traditional world, to the very useful tools that the blockchain can provide to all of us? Simplification and accessibility are key for massive adaption.
        The NFT trend did onboard plenty of new comers, that had no idea of the technology behind it in the first place, and maybe that's a good thing. Once you have one step inside this world you might want to dig more... as most of us did when we joined the ecosystem.<br />
        <span className="font-extrabold text-white">Irruption Lab</span>{' '}is simply working on building app that could help onboard new comers.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
