module.exports = {
  future: { webpack5: true },
  purge: ['.src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: ['tailwindcss',
  'postcss-preset-env'],
}
