/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondryBackground: "#1D1D1D",
      },
      screens: {
        vsm: "450px",
        sm: "675px",
      },
      container: {
        center: true,
        padding: {
          lg: "2rem",
          xl: "5rem",
          "2xl": "7rem",
        },
      },
    },
  },
  plugins: [],
};
