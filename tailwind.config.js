/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "navbar-bg": "#0F464E",
        "navbar-btn": "#0EC5B4",
        "inactive-card-green": "rgba(10, 155, 141, 0.7)",
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
    },
  },
  plugins: [],
};
