"use client";

import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";


const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => setDarkMode(prev => !prev);

    useEffect(() => {
        if (typeof window !== undefined) {
            const theme = localStorage.getItem("theme");
            if (theme === "dark") setDarkMode(true)
        }
    }, [])

    useEffect(() => {
        if (typeof window !== undefined) {
            if (darkMode) {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
            }
        }
    }, [darkMode])

    return (
        <button
            type="button"
            className={`w-6 h-6 rounded-full`}
            onClick={toggleTheme}
        >
            {darkMode
                ? <CiDark className="text-slate-200 w-full h-full" />
                : <CiLight className="text-yellow-500 w-full h-full" />
            }
        </button>
    )
}

export default ThemeToggle