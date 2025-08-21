
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#CBA135", // gold accent
          dark: "#1B1B1F",
          dim: "#23232A"
        }
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(0,0,0,0.4)"
      },
      borderRadius: {
        '2xl': '1.25rem'
      }
    },
  },
  plugins: [],
};
