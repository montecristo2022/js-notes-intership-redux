/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx', './src/**/*.ts'],
  theme: {
    extend: {
       backgroundColor: {
        'blue-active': '#1565c0',
        'blue-selected': '#206283',
        'default': '#A2D5E2',
        'blue-custom': '#3A7996',
      },
    },
  },
  plugins: [],
}

