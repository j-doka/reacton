/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        loading: {
          '0%': { width: "0%", left: "0%" },
          '50%': { width: "calc(100% - 19px)", left: "0%" },
          '100%': { width: "0%", left: "calc(100% - 19px)" },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        loading: 'loading 1.2s ease-in-out 0s',
      }
    },
  },
  plugins: [],
}

