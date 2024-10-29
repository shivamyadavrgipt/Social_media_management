/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
      },
      boxShadow: {
        custom: '5px 2px 5px 2px rgba(0, 0, 0, 0.6)', // Add your custom box shadow here
      },
    },
  },
  plugins: [],
}
