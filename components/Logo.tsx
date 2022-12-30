import { BoltIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link legacyBehavior href="/">
      <a className="my-2 flex items-center space-x-1 text-indigo-500">
        {/* <BoltIcon className="h-8 w-8 flex-shrink-0 mr-3" /> */}

        <Image className="font-bold text-3xl font-sans tracking-tight whitespace-nowrap"
          src="/IrruptionLab.png"
          alt="Irruption Lab"
          width={200}
          height={200}

        />
      </a>
    </Link>
  )
}

export default Logo;
