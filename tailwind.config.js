const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./{components,pages}/**/*.js"],
  theme: {
    extend: {
      colors: {
        clementine: "#EF7300",
        tumbleweed: "#D9A876",
        "hawkes-blue": "#C7DDFD",
        asparagus: "#789750",
        goldenrod: "#FFCE70",
        black: "#150703",
        "faded-black": "rgba(21,7,3,0.6)",
        "ecru-white": "#FAF8F3",
        "white-rock": "#E8E0CF",
        purple: "#9c27b0",
        "dark-purple": "#6d1b7b",
        pink:"#c2185b",
      },
      height: {
        112: "28rem",
      },
      rotate: {
        '-25': '-25deg',
      },
      boxShadow: {
        'thank-you': '-2.63365px 5.92572px 8.55938px rgba(0, 0, 0, 0.25)',
      },
      zIndex: {
        '-1': '-1',
       }
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      serif: ["'EB Garamond'", ...defaultTheme.fontFamily.serif],
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      borderRadius: ["hover"],
      fontStyle: ["hover"],
      textColor: ["checked"],
    },
  },
};
