const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          md: "2rem",
        },
      },
    },
  },
};
