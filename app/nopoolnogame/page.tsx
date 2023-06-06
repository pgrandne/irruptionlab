import Link from "next/link";
import Image from 'next/image';

const NoPoolNoGame = () => (
    <>
        <div className="flex justify-center items-center">
        <div>
        <h1 className="text-center font-semibold text-[50px]  mt-10 ">No Pool No Game</h1>        
        </div>
        <Link href="https://nopoolnogame.xyz" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100">
        <div className="mx-10">
            <Image
            src="/link.svg"
            alt="Website"
            width={50}
            height={50}
          />   
        </div>        
        </Link>
        </div>
        <p className="text-justify text-[25px] mt-10 px-10 md:px-44"> A <span className="font-extrabold">GameFi</span>, where the <span className="font-extrabold">winners share the interests generated by the deposits</span> of all the participants.
        You can <span className="font-extrabold">earn money without taking the risk of losing any.</span><br /><br />
        This is the <span className="font-extrabold">MVP</span> that lead Irruption Lab to InterPool.</p>  
        <br />
        <br />
        <div className=" flex justify-center relative pb-[39.375%]">
      <iframe
        className="absolute"
        width="70%"
        height="100%"
        src="https://www.youtube.com/embed/IdX2W7mtW4c"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

        <h2 className="text-center font-semibold text-[30px]  mt-10 mb-10">Problems we address</h2>
        
        <ul className="text-justify mt-10 px-10 md:px-44 list-disc list-inside">
        <li>Gamblers waste so much money (that they sometimes don’t have) on gambling games.</li><br />
        <li>Difficulties to onboard newcomers in the Blockchain ecosystem that is too complex, and not really sexy for most humans.</li>
        </ul>
        <h2 className="text-center font-semibold text-[30px]  mt-10 mb-10">Solutions</h2>
        <ul className="text-justify mt-10 px-10 md:px-44 list-disc list-inside">
        By sharing the interests generated by the deposits of all the participants, no one looses money, but it is still possible to gamble and have fun. There is a real social impact with the No Pool No Game project.
        </ul>
        <h2 className="text-center font-semibold text-[30px]  mt-10 mb-10">Genesis</h2>
        <p className="text-justify mt-10  px-10 md:px-44">Our main inspiration was <Link className="underline " href="https://pooltogether.com/" target="_blank" rel="noopener noreferrer">PoolTogether</Link> which is a Lottery with no loser. We love the no-loss concept, and we wanted to replace the chance factor by the merit factor.<br /> 
        We believe a game was a perfect way to do so, and especially a game based on scores, where it is difficult to cheat, preventing this way sybil attacks.<br /><br /></p>
        <Link href="https://nopoolnogame.xyz" target="_blank" rel="noopener noreferrer" className="mt-10 flex justify-center items-center opacity-80 hover:opacity-100">
        <div className="">
            <Image
            className="rounded-lg"
            src="/NoPoolNoGame-site.png"
            alt="No Pool No Game"
            width={800}
            height={800}
          />   
        </div>        
        </Link>
        <h2 className="text-center font-semibold text-[30px]  mt-10 mb-10"><Link className="text-white underline hover:opacity-90" href="https://nopoolnogame.xyz" target="_blank" rel="noopener noreferrer">www.nopoolnogame.xyz</Link></h2>
        
    </>
)

export default NoPoolNoGame;