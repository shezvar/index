/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['Montserrat', 'sans-serif'], // Add Montserrat here
      },
    },
  },
  plugins: [
    require('preline/plugin'),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
}