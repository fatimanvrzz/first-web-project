import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'header-fade-down': 'headerFadeDown 300ms ease-in-out',
      },
      keyframes: {
        'headerFadeDown': {
          '0%': { transform: "translateY(-5rem)" },
          '100%': { transform: "translateY(0px)" },
        }
      },
    },
  },
  plugins: [],
}

