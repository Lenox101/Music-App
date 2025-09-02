/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",        // expo-router + screens
    "./components/**/*.{js,jsx,ts,tsx}", // shared UI components
    "./hooks/**/*.{js,jsx,ts,tsx}",      // hooks (if they return components)
    "./constants/**/*.{js,jsx,ts,tsx}",  // if you store styled constants
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
