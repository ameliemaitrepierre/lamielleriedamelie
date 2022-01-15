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
      keyframes: {
        'animate-fade-in-down': {
          '0%': {
              opacity: '0',
              transform: 'translateY(-50px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'animate-fade-in-down .5s ease-out forwards'
      },
      colors: {
        primary: '#FDDD64',
        primary600: '#D6BA55'
      },
      borderRadius: {
        xl: "30px"
      },
      boxShadow: {
        cta: "-2px 2px 0px 2px #FEDD64",
        ctaHover: "-4px 4px 0px 4px #FEDD64",
        ctaBg: "-2px 2px 0px 2px #000000"
      },
      fontFamily: {
        sans: ['Josefin Sans', 'Arial', 'sans-serif'],
        handwritting: ['Adlery Pro', 'sans-serif']
      },
      gridTemplateColumns: {
        services: '150px 1fr'
      },
      minHeight: {
        waves: '90px'
      }
    },
  },
  variants: {},
  plugins: [],
}