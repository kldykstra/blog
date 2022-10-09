const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  corePlugins: {
    /* Turn off the use of fixed automatic breakpoints */
    // container: false,
  },
  theme: {
    extend: {
      colors: {
        'hero-font': '#F5F5F5',
        'hero-color': '#C65032',
        'hover-color': '#D3A599',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      fontFamily: {
        'hindsiliguri': ['Hind Siliguri', ...defaultTheme.fontFamily.serif],
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
