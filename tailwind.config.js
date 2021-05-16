// Tailwind CSS configuration:
// https://tailwindcss.com/docs/configuration
module.exports = {
  // https://tailwindcss.com/docs/optimizing-for-production
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
        transform: ['active'],
        skew: ['active'],
        rotate: ['active']
    },
  },
  plugins: [],
}
