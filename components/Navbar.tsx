'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setTheme('dark')
    }, [])

    const renderThemeChanger = () => {
        if (theme === 'light') {
            return (
                <Image
                    src="/moonIcon.svg"
                    alt="dark icon"
                    width={500}
                    height={500}
                    className="w-[6%] h-[6%] object-contain"
                    role="button" onClick={() => setTheme('dark')}
                />
            );
        }
        return (
            <Image
                src="/sunIcon.svg"
                alt="light icon"
                width={500}
                height={500}
                className="w-[6%] h-[6%] object-contain"
                role="button" onClick={() => setTheme('light')}
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
            <div className="absolute w-[50%] inset-0 gradient-01" />
            <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
                <Link className="w-[30%] h-[30%] z-0" href="/">
                    <Image
                        src="/irruptionLab.png"
                        alt="Irruption Lab"
                        width={500}
                        height={500}
                    />
                </Link>
                {renderThemeChanger()}
            </div>
        </motion.nav>
    );
};

export default Navbar;
