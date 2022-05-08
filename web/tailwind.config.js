module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996dff',
          500: '#8257e6'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
