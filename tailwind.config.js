/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
    "./src/assets/css/components/**/*.css",
  ],
  theme: {
    extend: {
      boxShadow: {
        border: "0px 0px 7px 1px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
