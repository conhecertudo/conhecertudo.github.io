/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ct-black': '#1e1e1e',
        'ct-black-light': '#151515',
        'ct-black-light-hover': '#151515',
        'ct-grey': '#444444',
        'ct-red': '#B1302B',
        'ct-yellow': '#E9C56D',
        'ct-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
