/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './components/**/*.{js,ts,jsx,tsx}',
      './styles/**/*.css',
    ],
    theme: {
      extend: {},
    },
    plugins: [require('tailwindcss-animate')],
  };