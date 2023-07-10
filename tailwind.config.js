const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      animation: {
        "reverse-spin": "reverse-spin 8s linear infinite",
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          },
        },
      },
    },
    colors: {
      dark: "#1b1b1b",
      light: "#f5f5f5",
      primary: "#833ab4",
      shine: "#b08f26",
      sparkle: "#e8b923",
      night: "#1e8bc3",
    },
    animation: {
      pulse: "pulse 5s infinite",
      bounce: "bounce 1s infinite",
      ping: "ping 1.5s cubic-bezier(1, 1, 1, 1) infinite",
      ping2: "ping 2.5s cubic-bezier(1, 1, 1, 1) infinite",
      ping3: "ping 3s cubic-bezier(1, 1, 1, 1) infinite",
    },
    backgroundImage: {
      circularLight:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 7px, #f5f5f5 130px)",
      circularDark:
        "repeating-radial-gradient(rgba(255, 255, 255, 0.5) 2px, #1b1b1b 8px, #1b1b1b 130px)",
    },
    screens: {
      "2xl": { min: "1535px" }, // media(min-width: 1535px)
      xl: { min: "1279px" },
      lg: { min: "1023px" },
      md: { min: "767px" },
      sm: { min: "639px" },
      xs: { min: "479px" },
    },
  },
  plugins: [],
};
