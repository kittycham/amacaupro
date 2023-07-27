/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem',
      },
      screens: {
        'sm': '350px',
      },
      colors: {
        footerGray: '#222222',
      },
    },
  },
  plugins: [],
  corePlugins: {
   container: false,
  },
}

