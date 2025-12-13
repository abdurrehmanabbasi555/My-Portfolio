/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        'bg-pattern': "url('/public/pixelFondo.png')",
      },
    },
  },
  plugins: [],
};
