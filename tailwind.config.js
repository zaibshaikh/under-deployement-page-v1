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
    extend: {
      colors: {
        navy: '#0a192f',
        lightnavy: '#112240',
        lightestnavy: '#233554',
        slate: '#8892b0',
        lightslate: '#a8b2d1',
        lightestslate: '#ccd6f6',
        white: '#e6f1ff',
        green: '#64ffda',
      },
    },
  },
  plugins: [],
};
