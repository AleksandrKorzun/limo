/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobV: "375px",
        mobV: { raw: "(min-width: 300px) and (max-width: 550px)" },
        mobH: { raw: "(max-height: 504px) and (max-width: 1000px)" },
        tabV: {
          raw: "(min-height: 1024px) and (max-height: 1366px) and (min-width: 768px) and (max-width: 1024px)",
        },
        tabH: {
          raw: "(min-height: 505px) and (max-height: 1025px) and (min-width: 1024px) and (max-width: 1366px)",
        },
        desc: "1440px",
      },
      colors: {
        background: "#F2F2F2",
        backgroundSecondary: "#EAEAEA",
        header: "rgba(209, 209, 209, 1)",
        footer: "#222222",
        accent: "#FFA500",
        main: "#222222",
        black: "#000000",
        white: "#FFFFFF",
        placeholder: "#797979",
        disabled: "#A9A9A9",
        border: "#ACACAC",
        yellow: "#FF8C00",
        input: "#DBDBDB",
      },
      fontFamily: {
        latoBold: ["var(--lato-bold)", "sans-serif"],
        latoRegular: ["var(--lato-regular)", "sans-serif"],
        latoMedium: ["var(--lato-regular)", "sans-serif"],
        latoBlack: ["var(--lato-black)", "sans-serif"],
        ebSemiBold: ["var(--eb-semi-bold)", "serif"],
      },
      leading: { 1: "115%", 2: "125%", 3: "150%" },
      fontSize: {
        small: "16px",
        medium: "24px",
        middle: "32px",
        big: "48px",
        tall: "64px",
        mega: "80px",
      },
      fontWeight: {
        normal: 400,
        bold: 700,
        black: 900,
        medium: 500,
      },
      boxShadow: {
        map: "7px 8px 20px 1px rgba(34, 34, 34, 0.30)",
        button:
          "36px 40px 15px 0px rgba(255, 165, 0, 0.00), 23px 26px 14px 0px rgba(255, 165, 0, 0.01), 13px 14px 12px 0px rgba(255, 165, 0, 0.05), 6px 6px 9px 0px rgba(255, 165, 0, 0.09), 1px 2px 5px 0px rgba(255, 165, 0, 0.10)",
      },
      backgroundPosition: {
        r: "center right -10rem",
      },
    },
  },
  plugins: [],
};
