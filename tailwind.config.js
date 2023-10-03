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
        "dark": "var(--dark)",
        "grey": "var(--grey)",
        "blue": "var(--blue)",
        "white": "var(--white)",
      }
    },
  },
  plugins: [],
}
