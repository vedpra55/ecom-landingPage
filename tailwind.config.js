/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pageComponents/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#1C8BCA",
      },
      backgroundImage: {
        "hero-pattern": "url('../public/hero.png')",
      },
      fontFamily: {
        gilroy: "Gilroy",
      },
    },
  },
  plugins: [],
};
