module.exports = {
  content: ["./docs/*.html"],
  theme: {
    debugScreens: {
      position: ["top", "right"],
    },
    extend: {},
  },
  plugins: [require("tailwindcss-debug-screens")],
};
