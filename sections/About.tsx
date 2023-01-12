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
            <div className="gradient-02 z-0" />
            <motion.div
                variants={staggerContainer()}
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
                    <span className="font-extrabold">The blockchain</span>{' '}is a complicated world, barely accessible for those who are not already in the ecosystem.
                    Simplification and accessibility are key for massive adaption.
                    NFT trend onboarded plenty of new comers, which had no idea of the technology behind it, and maybe that's a good thing. Once you have one step inside this world you might want to dig more... as most of us did when we joined the ecosystem.<br /><br />
                    <span className="font-extrabold">Irruption Lab</span>{' '}is simply working on building apps that could help onboard new comers. We develop easy-to-access dapps (decentralized applications) with real interest in real life. Our aim is to allow everyone to have access to this technology and all its opportunities. All our work is open source.
                </motion.p>

                <motion.img
                    variants={fadeIn('up', 'tween', 0.3, 1)}
                    src={theme !== "light" ? "/arrow-down-white.svg" : "/arrow-down.svg"}
                    alt="arrow down"
                    className="w-[18px] h-[28px] object-contain mt-[28px]"
                />
            </motion.div>
        </section>
    );
}

export default About;
