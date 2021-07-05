/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: ['./src/**/*.{tsx,ts}'],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    fontFamily: {
      sans:
        'Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
      mono: 'SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace',
    },
    extend: {
      colors: {
        bg: '#131415',
        fg: '#fafbfc',
        cg: '#666',
        'light-gray': '#444',
        'lighter-gray': '#222',
        'lightest-gray': '#1a1a1a',
        'article-color': '#eaeaea',
        'header-bg': 'rgba(19, 20, 21, 0.45)',
        'gray-alpha': 'rgba(255, 255, 255, 0.5)',
        selection: 'rgba(255, 255, 255, 0.99)',
      },
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
}
