'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import { useTheme } from 'next-themes';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => {
    const { theme, setTheme } = useTheme()
    return (
        <section className={`${styles.paddings} relative z-10`}>
            <div className="opacity-50 sm:opacity-100 gradient-02 z-0" />
            <motion.div
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`overflow-hidden ${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
            >
                <TypingText title="| About Irruption Lab" textStyles="text-center" />

                <motion.p
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    className="mt-[8px] font-normal px-2 md:px-10 sm:text-[32px] text-[20px] text-center text-secondary-white"
                >
                    <span className="font-extrabold">The blockchain</span>{' '}is a complicated world.<br /><br />
                    {/* barely accessible for those who are not already in the ecosystem. */}
                    {/* Simplification and accessibility are key for massive adaption. */}
                    {/* NFT trend onboarded plenty of new comers, which had no idea of the technology behind it, and maybe that's a good thing. Once you have one step inside this world you might want to dig more... as most of us did when we joined the ecosystem.<br /><br /> */}
                    <span className="font-extrabold">Irruption Lab</span>{' '}builds apps that could help onboard newcomers. <br /><br />Our goal is to make this technology and its potential accessible to everyone by creating decentralized applications (dapps) that are easily accessible and relevant to real-life situations. <br /><br />All our work is <span className="font-extrabold">open source.</span>
                </motion.p>
                <motion.img
                    variants={fadeIn('up', 'tween', 0.3, 1)}
                    src={theme !== "light" ? "/arrow-down-white.svg" : "/arrow-down.svg"}
                    alt="arrow down"
                    className="w-[18px] h-[28px] object-contain mt-[28px]"
                />
            </motion.div>
        </section >
    );
}

export default About;
