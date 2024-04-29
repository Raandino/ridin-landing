/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4269F4",
        secondary: "#010E26",
        neutral:"#f2f2f2"
      }
    },
  },
  plugins: [],
}

