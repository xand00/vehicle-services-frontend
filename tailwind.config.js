const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
  purge: ["./components/**/*.js", "./pages/**/*.js"],
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
