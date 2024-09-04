/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },colors: {
        bg: "#ffffff",
        textColor: "#000000",
        softBg: "#f0f0f0",
        softTextColor: "#626262",

        bgDark: "#0f172a",
        textDark: "#ddd",
        softDarkBg: "#1f273a",
        softDarkTextColor: "#a6a6a6"
      },
    }
  },
  plugins: [],
};
