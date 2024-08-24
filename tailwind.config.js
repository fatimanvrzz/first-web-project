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
        'sourceCod': ['"Source Code Pro"', 'monospace'],
        'notoSans': ['"Noto Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

