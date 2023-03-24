module.exports = {
  content: ["./docs/*.{html,js,jsx}"],
  theme: {
    debugScreens: {
      position: ["top", "right"],
    },
    extend: {},
  },
  plugins: [require("tailwindcss-debug-screens")],
};
