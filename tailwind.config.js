module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',

  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '9v': '90vh'
      },
      flex: {
        '3': '5 5 0%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
