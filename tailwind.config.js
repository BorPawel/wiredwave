/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: "#111111",
        grey: "#181818",
        blue: "#0074e4",
        white: "#fff",
      },
    },
    dropShadow: {
      glow: [
        "1px 1px 20px rgba(255,255, 255, 0.6)",
        "0 0px 45px rgba(255, 255,255, 0.35)",
      ],
      smallCircle: [
        "1px 1px 5px rgba(0, 116, 228, 1)",
        "1px 1px 10px rgba(0, 116, 228, 1)",
        "1px 1px 18px rgba(0, 116, 228, 1)",
        "1px 1px 25px rgba(0, 116, 228, 1)",
      ],
      inner: [
        "1px 1px 5px rgba(0, 116, 228, 1)",
        "1px 1px 10px rgba(0, 116, 228, 1)",
        
      ],
      
      outer: [
        "1px 1px 2px rgba(0, 116, 228, 1)",
        "1px 1px 10px rgba(0, 116, 228, 1)",
        "1px 1px 15px rgba(0, 116, 228, 1)",
      ],
     
    },
  },
  plugins: [],
}
