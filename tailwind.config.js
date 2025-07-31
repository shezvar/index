/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['Montserrat', 'sans-serif'], // Add Montserrat here
      },
      colors: {
        main: '#f4f4f4', // Example primary color
      },
    },
  },
  plugins: [
    import("tailwindcss"),
    import("autoprefixer"),
  ],
}