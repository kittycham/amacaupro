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
      html: {
        margin: 0,
        padding: 0,
      },
      body: {
        margin: 0,
        padding: 0,
      },
    },
  },
  plugins: [],
  corePlugins: {
   container: false,
  },
}

