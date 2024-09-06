import Image from "next/image"
import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
    return (
        <div className="mt-14 border-t py-4 flex flex-col">
            <div className="flex flex-col gap-4 flex-[3]">
                <Link className="flex items-center gap-2" href={'/'}>
                    <Image
                        src={'/logo.png'}
                        alt="logo"
                        width={50}
                        height={50}
                        className="bg-white rounded-full ring-[1.5px] ring-bgDark"
                    />
                    <h1 className="text-2xl font-semibold uppercase text">logo</h1>
                </Link>
                <p className="text-pretty text-softTextColor dark:text-softDarkTextColor max-w-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam ipsum ea alias autem veritatis nisi perspiciatis dolorum dolorem quidem neque,
                    possimus architecto animi cupiditate cum, a unde porro distinctio!
                </p>
                <div className="flex items-center gap-2 flex-1">
                    <button type="button" className="w-6 h-6">
                        <CiFacebook className="w-full h-full" />
                    </button>
                    <button type="button" className="w-6 h-6">
                        <CiInstagram className="w-full h-full" />
                    </button>
                    <button type="button" className="w-6 h-6">
                        <CiYoutube className="w-full h-full" />
                    </button>
                </div>
            </div>
            <div className="flex items-end justify-center md:justify-end  flex-wrap flex-1 gap-4 lg:divide-x  dark:divide-gray-500">
                <Link className="text-center pl-3 h-max text-gray-500" href={'/'}>Home</Link>
                <Link className="text-center pl-3 h-max text-gray-500" href={'/'}>Contact</Link>
                <Link className="text-center pl-3 h-max text-gray-500" href={'/'}>About</Link>
            </div>
        </div>
    )
}

export default Footer