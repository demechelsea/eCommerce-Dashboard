module.exports = {
  darkMode: 'class', 
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        bodydark2: 'rgba(138, 153, 175, 1)',
        'meta-4': {
          DEFAULT: 'rgba(255, 255, 255, 0.1)', 
          dark: 'rgba(40, 44, 52, 1)', 
        },
      },
      fontSize: {
        sm: '0.875rem',
      },
      fontWeight: {
        medium: 500,
      },
      width: {
        '125': '500px', 
      },
    },
  },
};
