module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  mode: 'jit',
  purge: ['.src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
