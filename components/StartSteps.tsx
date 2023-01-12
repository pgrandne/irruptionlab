import styles from '../styles';

const StartSteps = ({ number, text }: { number: string, text: string }) => (
    <div className={`${styles.flexCenter} flex-row`}>
        <div
            className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
        >
            <p className="font-bold text-[20px] text-white">
                {number}
            </p>
        </div>
        <p className="flex-1 ml-[30px] font-semibold text-[18px] leading-[32.4px]">
            {text !== "urlCalendly" ? text : <a href="https://calendly.com/irruptionlab" target="_blank" rel="noreferrer">Click here to schedule a meeting with us</a>}
        </p>
    </div>
);

export default StartSteps;
