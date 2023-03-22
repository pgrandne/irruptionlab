import Link from "next/link";
import Image from 'next/image';

const PlzNftMe = () => (
    <>
        <div className="flex justify-center items-center">
        <div>
        <h1 className="text-center font-semibold text-[50px]  mt-10 ">PlzNft.me</h1>        
        </div>
        <Link href="https://plz-nft-me.vercel.app" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100">
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
        <p className="text-justify text-[25px] mt-10 px-10 md:px-44">Get a <span className="font-extrabold">sketch of yourself in NFT format!</span> <br /><br />
        PlzNFT.me is a platform that enables individuals to obtain a <span className="font-extrabold">customized NFT</span> by providing a picture link. Upon receiving the request and the required Matic deposit from the requester, <span className="font-extrabold">genuine artists</span> commence creating the NFT, drawing inspiration from the image submitted.</p>        
        <Link href="https://plz-nft-me.vercel.app" target="_blank" rel="noopener noreferrer" className="mt-10 flex justify-center items-center opacity-80 hover:opacity-100">
        <div className="">
            <Image
            className="rounded-lg"
            src="/plznftme.svg"
            alt="PlzNFTme"
            width={800}
            height={800}
          />   
        </div>        
        </Link>
        <h2 className="text-center font-semibold text-[30px]  mt-10 mb-10"><Link className="text-white underline hover:opacity-90" href="https://plz-nft-me.vercel.app" target="_blank" rel="noopener noreferrer">wwww.plz-nft-me.vercel.app</Link></h2>
        
    </>
)
export default PlzNftMe;