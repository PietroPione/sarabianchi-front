/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7CACC1",
        secondary: "#f94239",
        tertiary: "#fad201",
        gray: "#54595F",
        white: "#fff",
      },
      fontSize: {
        15: "0.938rem",
        17: "1.063rem",
        32: "2rem",
        75: "4.688rem",
      },
      spacing: {
        header: "5.734375rem",
      },
      maxWidth: {
        container: "600px",
      },
    },
  },
  plugins: [],
};
