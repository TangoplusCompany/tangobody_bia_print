/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SUIT Variable"', 'sans-serif'],
      },
      colors: {
        'accent' : '#2660E9',
        'redd': '#FF4438',
        'sub': {
          800: '#454545',
          400: '#AEAEAE',
          200: '#DBDBDB',
          100: '#F4F4F4',
        }
      }
    },
  },
  plugins: [],
}

