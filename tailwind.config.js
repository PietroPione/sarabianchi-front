/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C97B6",
        secondary: "#FDA366",
        tertiary: "##EE662B",
        quaternary: "#5CCFD6",
        five: "#F7EAC8",
        gray: "#54595F",
        white: "#F2F2F2",
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
