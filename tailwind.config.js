const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      animation: {
        'reverse-spin': 'reverse-spin 8s linear infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)',
          },
        },
      },
    },
    colors: {
      dark: '#1b1b1b',
      light: '#f5f5f5',
      primary: '#833ab4',
      sparkle: '#e8b923',
      night: '#1e8bc3',
    },
    animation: {
      bounce: 'bounce 1s infinite',
    },
    backgroundImage: {
      circularLightLarge:
        'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 10px, #f5f5f5 120px)',
      circularLightSmall:
        'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 8px, #f5f5f5 25px)',
      circularDarkLarge:
        'repeating-radial-gradient(rgba(255, 255, 255, 0.5) 2px, #1b1b1b 10px, #1b1b1b 120px)',
      circularDarkSmall:
        'repeating-radial-gradient(rgba(255, 255, 255, 0.5) 2px, #1b1b1b 8px, #1b1b1b 25px)',
    },
    screens: {
      '2xl': { min: '1535px' }, // media(min-width: 1535px)
      xl: { min: '1279px' },
      lg: { min: '1023px' },
      md: { min: '767px' },
      sm: { min: '639px' },
      xs: { min: '479px' },
    },
  },
  plugins: [],
}
