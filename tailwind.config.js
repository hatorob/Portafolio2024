/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secundary: '#00FFB2',
        blueLight: '#00c3ef',
        light: '#ffffff'
      },
      fontFamily: {
        krona: ["Krona One", "sans-serif"]
      }
    },
  },
  plugins: [],
}

