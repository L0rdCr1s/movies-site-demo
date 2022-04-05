module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['regular', 'sans-serif'],
      'regular': ['regular', 'sans-serif'],
      'bold': ['bold', 'sans-serif'],
      'semi-bold': ['semi-bold', 'sans-serif'],
      'body': ['regular', 'sans-serif'],
    },
    extend: {
      colors: {
        white: '#fcfaff',
        black: '#19052e',
        orange: '#fff082',
        background: '#332f51',
        gray: {
          brand: '#515052',
        },
        brand: {
          900: '#913BEA',
          800: '#9B50EF',
          700: '#a967ef',
          600: '#b67ef1',
          500: '#c395f4',
          400: '#d0acf6',
          300: '#ddc3f9',
          200: '#eadafb',
          100: '#f7f1fe',
          50: '#fcfaff',
        },
      },
      screens: {
        xs: '300px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
