import Link from "next/link";
import Image from "next/image";
import { Permanent_Marker } from "@next/font/google";

const permarker = Permanent_Marker({ weight: "400", subsets: ["latin"] });

const Revolte = () => (
  <>
    <div className="flex justify-center items-center mt-5 ">
      <div className={permarker.className}>
        <h1 className="text-center text-[50px] md:text-[80px] -mb-3 md:-mb-5 ">
          Revolte
        </h1>
        <h2 className="text-center font-semibold text-[18px] md:text-[26px] ">
          Story of a whistleblower
        </h2>
      </div>
      <Link
        href="https://www.revolte.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-90 hover:opacity-100 "
      >
        <div className="ml-10">
          <Image src="/link.svg" alt="Website" width={50} height={50} />
        </div>
      </Link>
    </div>

    <p className="text-justify text-[20px] mt-10 px-10 md:px-44">
      Join the Web3 revolution with <i>Revolte! </i> <br />
      <br />
      Our adventure game introduces users to the world of blockchain, wallets,
      tokens, and more, with mandatory tasks like wallet installation to guide
      players through the story. Explore real Web3 applications and experience
      the potential of this transformative technology.
      <br />
      <br />
    </p>
    <div className=" flex justify-center relative pb-[39.375%]">
      <iframe
        className="absolute"
        width="70%"
        height="100%"
        src="https://www.youtube.com/embed/ESlq7TyzOsE"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <h2 className="text-center font-semibold text-[30px]  mt-10 mb-10">
      Story
    </h2>
    <p className="text-justify mt-10 px-10 md:px-44">
      Embark on an unforgettable journey that begins in the fictitious land of
      Listenbourg, in October of 2023. A shocking discovery of a vast
      counterfeit currency network has sent the country into chaos, and in a
      bold move to save the economy from ruin, the government outlaws cash.
      <br />
      <br />
      As you assume the role of Azad, an intrepid journalist from the Lurenberg
      Post, a whistleblower contacts you with a game-changing tipoff - an
      unparalleled financial and political scandal is about to be exposed.
      <br />
      <br />
      Are you up for the challenge? Brace yourself for an adventure that will
      keep you on the edge of your seat. Don't hesitate - join Azad and discover
      what lies ahead!
      <br />
    </p>
    <h2 className="text-center font-semibold text-[30px]  mt-10 mb-10">
      Description
    </h2>
    <ul className="text-justify mt-10  px-10 md:px-44 list-disc list-inside">
      With this adventure game we’re trying to help people get into web3 without
      scaring them off with all the complicated technical stuff.
      <br />
      <br />
      Simply follow the adventure, no additional instruction is required. Each
      chapter has different objectives, as described below, to enter smoothly
      into Web3 and into our world...
      <br />
      <br />
      <li>
        Chapter 1 is live! It leads to the installation of the wallet for the
        new comers. The purpose of this chapter is to introduce the story and
        make the world we’ve created feel more real and interesting.
      </li>
      <br />
      <li>
        Chapter 2: this one is for the users to experiment (on the testnet) the
        basics of web3, like making a transaction, swap, using a bridge,
        nft…This chapter (split in several episodes) will be developed from
        March to April 2023. Some episodes have already been released.
      </li>
      <br />
      <li>
        Chapter 3 (on the mainnet). This chapter will be dedicated to showcase
        existing protocols and integrate them in our story. Users will have to
        interact with those protocols, as if it was part of the story, to
        continue the adventure. This chapter will start from May 2023. The
        number of episodes is not limited (one protocol per episode will be
        showcased).
      </li>
      <br />
    </ul>
    <Link
      href="https://www.revolte.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center items-center opacity-80 hover:opacity-100"
    >
      <div className="">
        <Image
          src="/entertheadventure.png"
          alt="Enter the adventure"
          width={800}
          height={800}
        />
      </div>
    </Link>
    <h2 className="text-center font-semibold text-[30px]  mt-10 mb-10">
      Genesis
    </h2>
    <p className="text-justify mt-10  px-10 md:px-44">
      With Irruption Lab, we are building applications for web3 democratization,
      and the Revolte project is part of it. We have already created several
      projects, and the feedback from the newcomers was always the same: Why do
      I need to install a wallet? What is a transaction? Why do I need gas? Why
      do I need to sign/approve messages all the time? Why can't I log in with
      email and password like everywhere else? What are the real use cases of
      the technology? Blockchain, you mean Bitcoin?
      <br />
      <br />
      Something is missing ! Without easy/fun Web3 on-ramp, a mass adoption is
      utopian. With our adventure game Revolte, we are trying to help people get
      into web3 without scaring them off with all the complicated technical
      stuff.
      <br />
      <br />
      Inspiration:{" "}
      <Link
        className="underline "
        href="https://cryptozombies.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Cryptozombie
      </Link>{" "}
      to learn Solidity langage, and{" "}
      <Link
        className="underline "
        href="https://ethereumhacker.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ethereumhacker{" "}
      </Link>{" "}
      to learn about smart contracts vulnerabilities.
      <br />
      <br />
    </p>
    <h2 className="text-center font-semibold text-[30px]  mt-10 mb-10">
      Roadmap
    </h2>
    <div className="flex justify-center items-center">
      <Image
        className="rounded-lg"
        src="/revolte-roadmap.png"
        alt="Roadmap"
        width={800}
        height={800}
      />
    </div>
    <h2 className="text-center font-semibold text-[30px]  mt-10 mb-10">
      Pitch Deck ({" "}
      <a
        className="text-white underline hover:opacity-80"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.canva.com/design/DAFaoOaGU3A/Jj8ILlofzMJ5_gv8nlivKg/view?utm_content=DAFaoOaGU3A&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
      >
        Online
      </a>{" "}
      /{" "}
      <a
        className="text-white underline hover:opacity-80"
        target="_blank"
        rel="noopener noreferrer"
        href="https://drive.google.com/uc?id=1heBnCKRaljTbxGf0CcZR3-e65KASU53A&export=download"
      >
        Download
      </a>{" "}
      )
    </h2>

    {/* <h2 className="text-center font-semibold text-[30px]  mt-10 mb-10">Video</h2>
        <iframe width="560" height="315" src="https://youtu.be/D83JsWduODM" title="Video presentation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
    <h2 className="text-center font-semibold text-[30px]  mt-10 mb-10">
      <Link
        className="text-white underline hover:opacity-80"
        href="https://www.revolte.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        www.revolte.app
      </Link>
    </h2>
  </>
);
export default Revolte;
