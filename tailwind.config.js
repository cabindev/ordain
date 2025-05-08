/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          'gold-primary': '#E5C87D',
          'gold-light': '#F0DAA4',
          'gold-dark': '#C9A55A',
          'brown-primary': '#613A1D',
          'brown-light': '#8C5B34',
          'brown-dark': '#42280F',
          'orange-primary': '#E8871E',
        }
      },
    },
    plugins: [],
  };