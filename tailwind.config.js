/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: {
          ...defaultTheme.colors.black,
          primary: '#18191c'
        },
        red: {
          ...defaultTheme.colors.red,
          primary: '#ff0100'
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        josefin: ['Josefin Sans']
      }
    }
  },
  plugins: [require('tailwindcss'), require('postcss'), require('autoprefixer')]
};
