/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        bangers: [`var(--font-bangers)`, 'sans-serif'],
        quicksand: [`var(--font-quicksand)`, 'sans-serif'],
        robotoCondensed: [`var(--font-robotoCondensed)`, 'sans-serif'],
      },
      colors: {
        primary: '#d1411e',
        secondary: '#ffa323',
        tertiary: '#331812',
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
