module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './components/**/**/*.{vue,js}',
    './components/*.{vue,js}',
    './layouts/**/*.vue',
    './layouts/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    display: ['group-hover', 'responsive'],
    opacity: ['disabled'],
    backgroundColor: ['disabled', 'hover'],
    textColor: ['responsive', 'hover'],
    cursor: ['disabled', 'hover'],
  },
  plugins: [],
}
