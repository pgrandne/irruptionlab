'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, href, status, index, active, handleClick }:
    {
        id: string,
        imgUrl: string,
        title: string,
        href: string,
        index: number,
        status: string,
        active: string,
        handleClick: any
    }) => (
    <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
        onClick={() => handleClick(id)}
    >
        <Image
            src={imgUrl}
            fill
            alt={title}
            className="absolute w-full h-full object-cover rounded-[24px]"
        />
        {active !== id ? (
            <span className="box-decoration-slice rounded-md bg-gradient-to-r from-indigo-600 to-pink-500 absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
                <h3 className="px-2 font-semibold sm:text-[26px] text-[20px] text-white">
                    {title}
                </h3>
            </span>
        ) : (
            <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
                <a href={href} target={status === "prod" ? "_blank" : "_self"} rel="noreferrer">
                    <div
                        className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
                    >
                        <img
                            src={status == "prod" ? "/link.svg" : "/dev.svg"}
                            alt="link"
                            className="w-1/2 h-1/2 object-contain"
                        />

                    </div>
                    <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
                        {status === "prod" ? "Discover Project" : "In development"}
                    </p>
                    <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
                        {title}
                    </h2>
                </a>
            </div>

        )}
    </motion.div >
);

export default ExploreCard;
