/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, ejs}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  //...
  plugins: [require("daisyui")],
}

module.exports = {
  //...
  daisyui: {
    themes: ["wireframe"],
  },
}