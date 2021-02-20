module.exports = {
  darkMode: 'class',
  purge: {
    content: ['./src/**/*.tsx'],
    options: {
      safelist: ['dark'],
    },
  },
  theme: {
    typography: (theme) => ({}),
    extend: {
      colors: {
        pinterest: '#E60023',
        instagram: '#E1306C',
        twitter: '#1DA1F2',
        github: '#333',
        spotify: '#1DB954',
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: 'white',
          },
        },
      }),
      fontFamily: {
        mono: ['Roboto Mono', 'monospace'],
        fira: ['Fira Code', 'monospace'],
      },
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
}
