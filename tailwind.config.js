module.exports = { 
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b50df', // Primary color
          hover: '#3347c5',  // Hover state
        },
        secondary: {
          DEFAULT: '#10b982', // Secondary color
          hover: '#0e966f',  // Hover state
        },
        tertiary: {
          DEFAULT: '#1c2333', // Tertiary color (black)
          hover: '#151a26',  // Hover state
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          'overflow-y': 'auto',
          '-ms-overflow-style': 'none',  // IE and Edge
          'scrollbar-width': 'none',     // Firefox
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',               // Chrome, Safari, and Edge
        },
      });
    },
  ],
};
