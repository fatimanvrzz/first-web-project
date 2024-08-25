/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1c19a0',
        'secondary': '#FFAE25',
        'purple': '#8368FF',
        'grey': '#6D6D6D',
      },
      animation: {
        'header-fade-down': 'headerFadeDown 300ms ease-in-out',
      },
      keyframes: {
        'headerFadeDown': {
          '0%': { transform: "translateY(-5rem)" },
          '100%': { transform: "translateY(0px)" },
        }
      },
      fontFamily: {
        'source-cod': ['"Source Code Pro"', 'monospace'],
        'noto-sans': ['"Noto Sans"', 'sans-serif'],
      },
      boxShadow: {
        'all-around': '3px 4px 15px #FFAE2566',
      },
    },
  },
  plugins: [],
}

