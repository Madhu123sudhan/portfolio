/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'primary' : 'rgba(8,8,8)',
        'secondary': 'rgba(8, 8, 8,0.980)'
      }
    },
    fontFamily: {
      'hero-font' : 'Open Sans'
    },
  },
  plugins: [
    
  ]
}

