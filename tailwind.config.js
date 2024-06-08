/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      sd: "902px",
      md: "1060px",
      ml: "1104px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
