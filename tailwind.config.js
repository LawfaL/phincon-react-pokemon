/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        danger: "#FF0000",
        warning: "#FFCC00",
        primary: "#3B4CCA",
        success: "#3C9D40",
        light: "#FFFFFF",
        secondary: "#808080",
      },
      spacing: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "36px",
        "3xl": "48px",
      },
    },
  },
  plugins: [],
};
