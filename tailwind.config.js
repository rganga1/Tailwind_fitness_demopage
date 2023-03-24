module.exports = {
  content: ["./docs/*.{html,js,jsx}"],
  theme: {
    debugScreens: {
      position: ["top", "right"],
    },
    extend: {
      fontFamily: {
        delicious: ["Delicious Handrawn", "cursive"],
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
