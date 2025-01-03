module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b50df', // Primary color
          hover: '#3347c5',   // Hover state
        },
        secondary: {
          DEFAULT: '#10b982', // Secondary color
          hover: '#0e966f',   // Hover state
        },
        tertiary: {
          DEFAULT: '#1c2333', // Tertiary color (black)
          hover: '#151a26',   // Hover state
        },
        gray: {
          DEFAULT: '#637381', // Ensure it overrides other styles
          hover: '#4f5c65',
        },
        light: {
          DEFAULT: '#EFEFEF', // Light color
          hover: '#e0e0e0',   // Hover state
        },
        warning: {
          DEFAULT: '#F9C107', // Warning color
          hover: '#dba406',   // Hover state
        },
        danger: {
          DEFAULT: '#DC3545', // Danger color
          hover: '#c12d3b',   // Hover state
        },
        success: {
          DEFAULT: '#3CA745', // Success color
          hover: '#33903b',   // Hover state
        },
        info: {
          DEFAULT: '#3BA2B8', // Info color
          hover: '#3290a3',   // Hover state
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
