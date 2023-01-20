'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, urlExt, index }: {
    imgUrl: string,
    title: string,
    subtitle: string,
    urlExt: string,
    index: number
}) => {
    const { theme, setTheme } = useTheme()
    const borderColor = () => {
        if (theme !== 'light') {
            return ("border-white")
        }
        return ("border-black")
    }
    return (
        <motion.div
            variants={fadeIn('up', 'spring', index * 0.5, 1)}
            className="flex md:flex-row flex-col gap-4"
        >
            <img
                src={imgUrl}
                alt={title}
                className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
            />
            <div className="w-full flex justify-between items-center">
                <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                    <h4 className="font-semibold lg:text-[42px] text-[26px]">
                        {title}
                    </h4>
                    <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white whitespace-pre-line">
                        {subtitle}
                    </p>
                </div>

                <a
                    href={urlExt} target="_blank" rel="noreferrer"
                    className={`lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[2px] ${borderColor()}`}
                >
                    <img
                        src={theme !== "light" ? "/arrow-white.svg" : "/arrow.svg"}
                        alt="arrow"
                        className="w-[40%] h-[40%] object-contain"
                    />
                </a>
            </div>
        </motion.div>
    );
};

export default InsightCard;
