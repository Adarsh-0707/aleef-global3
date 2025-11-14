/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#12b3ff",
        dark: "#0d0f13",
        card: "#10141b",
        card2: "#0b1220"
      },
      boxShadow: {
        lgx: "0 10px 30px rgba(0,0,0,.35)"
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
