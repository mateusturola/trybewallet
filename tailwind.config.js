module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      xl: { max: '1279px', min: '1023px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px', min: '767px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px', min: '639px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
