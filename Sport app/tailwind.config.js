/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
        colors: {
        primary: '#E73725', // Je eigen kleur
        secondary: '#010000', // Nog een kleur
        accent: '#E1E1E1', // Accentkleur
      },
    },
  },
  plugins: [],
}