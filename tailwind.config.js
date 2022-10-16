/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Righteous', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#005168',
      },
    },
  },
  plugins: [],
};
