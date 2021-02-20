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
        goober: '#34D399',
        twitter: '#00aced',
        github: '#1769ff',
        instagram: '#EF4444',
        pinterest: '#0b64c3',
        dribbble: '#a71a28',
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
