/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      sm:"640px",

      md:"768px",

      lg: "1280px",

      xl:"1536px"
    }
  },
  plugins: [],
}
