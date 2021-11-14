module.exports = {
  mode: 'jit',
  purge: {
    content: ['_site/**/*.html'],
    options: {
      safelist: [],
    },
  },
  theme: {
    extend: {
      colors: {
        primary: '#FDDD64',
      },
      fontFamily: {
        sans: ['Josefin Sans', 'Arial', 'sans-serif'],
        handwritting: ['Adlery Pro', 'sans-serif']
      },
      gridTemplateColumns: {
        services: '150px 1fr'
      }
    },
  },
  variants: {},
  plugins: [],
}