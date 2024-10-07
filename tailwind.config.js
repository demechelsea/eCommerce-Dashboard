module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        bodydark2: 'rgba(138, 153, 175, 1)',
      },
      fontSize: {
        sm: '0.875rem',
      },
      fontWeight: {
        medium: 500,
      },
    },
  },
  plugins: [function ({ addUtilities }) {
    addUtilities({
      '.no-scrollbar': {
        /* Hide scrollbar for modern browsers */
        'scrollbar-width': 'none', /* Firefox */
        '-ms-overflow-style': 'none', /* Internet Explorer 10+ */
        '&::-webkit-scrollbar': {
          display: 'none', /* Safari and Chrome */
        },
      },
    });
  },],
};
