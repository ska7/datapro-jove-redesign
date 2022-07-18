/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "navbar-bg": "#0F464E",
        "navbar-btn": "#0EC5B4",
        "banner-title-green": "#0A9B8D",
        "inactive-card-green": "rgba(10, 155, 141, 0.7)",
        "text-secondary": "#163B45",
        gray: "#909AA4",
      },
      backgroundImage: {
        "card-biology": "url('./assets/card-biology.jpg')",
        "card-chemistry": "url('./assets/card-chemistry.jpg')",
      },
      flex: {
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
      screens: {
        "xs-max": { max: "639px" },
        "sm-max": { max: "767px" },
        "md-max": { max: "1023px" },
        "lg-max": { max: "1279px" },
        "xl-max": { max: "1535px" },
        sm: { min: "640px", max: "767px" },

        md: { min: "768px", max: "1023px" },

        lg: { min: "1024px", max: "1279px" },

        xl: { min: "1280px", max: "1535px" },

        "2xl": { min: "1536px" },
      },
    },
  },
  plugins: [],
};
