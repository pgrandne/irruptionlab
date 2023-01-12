'use client';

import Image from 'next/image';
import { motion } from 'framer-motion'
import { socials } from '../constants'
import styles from '../styles'
import { footerVariants } from '../utils/motion'
import { useTheme } from 'next-themes';

interface ISocial {
    name: string,
    url: string,
    urlWhite: string,
    href: string,
}

const Footer = () => {
    const { theme } = useTheme()

    return (
        <motion.footer
            variants={footerVariants}
            initial="hidden"
            whileInView="show"
            className={`${styles.xPaddings} py-8 relative`}
        >
            <div className="footer-gradient" />
            <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
                <div className="flex flex-col">
                    <div className="mb-[50px] h-[2px] bg-white opacity-10" />

                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <h4 className="font-extrabold text-[24px]">
                            Irruption Lab
                        </h4>
                        <p className="font-normal text-[14px] opacity-50">
                            Copyright © 2023 Irruption Lab. All rights reserved.
                        </p>

                        <div className="flex gap-4">
                            {socials.map((social: ISocial) => (
                                <a href={social.href} target="_blank" rel="noreferrer"
                                    key={social.name}
                                >
                                    <Image
                                        src={theme !== "light" ? social.urlWhite : social.url}
                                        alt={social.name}
                                        width={500}
                                        height={500}
                                        className="w-[24px] h-[24px] object-contain cursor-pointer"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
