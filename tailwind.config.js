module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
      },
      keyframes: {
        'hue-rotate': {
          '0%': {
            filter: 'hue-rotate(0deg)',
          },
          '50%': {
            filter: 'hue-rotate(180deg)',
          },
          '100%': {
            filter: 'hue-rotate(0deg)',
          },
        },
      },
      animation: {
        'hue-rotate': 'hue-rotate 15s ease infinite',
      },
      typography: {
        DEFAULT: {
          css: {
            body: {
              color: 'black',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
