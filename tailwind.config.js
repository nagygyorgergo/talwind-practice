/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/components/**/*.{html,ts}",
    "./src/app/components/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primaryblue: '#172554',
      metallicgray: "#475569",
      newcolor: '#123456', // Make sure this line is correctly formatted

      },
    },
  },
  plugins: [],
}

