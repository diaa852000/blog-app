"use client";

import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import ThemeToggle from "./ThemeToggle";
import AuthLinks from "./AuthLinks";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const links = [
    { path: "/", label: "Home" },
    { path: "/", label: "Contact" },
    { path: "/", label: "About" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleNav = () => setOpen(prev => !prev)

    return (
        <div className="flex items-center justify-between h-[100px]">
            {/* SOCIAL_LINKS */}
            <div className="hidden md:flex items-center gap-2 flex-1">
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
            {/* LOGO */}
            <div className="flex-1 md:text-center text-3xl font-bold">Blogo</div>
            {/* NAV_LINKS */}
            <div className="flex items-center justify-end gap-4 flex-1 ">
                    <ThemeToggle />
                <div className="hidden md:flex items-center gap-4">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.path}
                            className=""
                        >
                            {link.label}
                        </Link>
                    ))}
                    <AuthLinks />
                </div>
            </div>

            <button
                type="button"
                className="h-6 w-6 md:hidden ml-2"
                onClick={toggleNav}
            >
                <IoIosMenu className="w-full h-full" />
            </button>
            <div className={`md:hidden flex flex-col h-screen w-full overflow-hidden bg-bg dark:bg-bgDark z-20 shadow fixed top-0 ${open ? "left-0" : "-left-[200vw]"} transition-all duration-300 ease-linear px-8`}>
                <div className="flex items-center justify-between p-8">
                    <div className="flex-1 md:text-center text-3xl font-bold">Blogo</div>
                    <button
                        type="button"
                        className="w-6 h-6"
                        onClick={toggleNav}
                    >
                        <IoMdClose className="w-full h-full" />
                    </button>
                </div>
                <div className="flex flex-col items-center justify-start gap-8 h-full mt-32">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.path}
                            className="text-3xl"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <AuthLinks />
                </div>
            </div>
        </div >
    )
}

export default Navbar