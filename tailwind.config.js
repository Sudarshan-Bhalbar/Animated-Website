/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      width: {
        'w-100':'100vh',
      },
      height: {
        'h-100':'100vh',
      },
      
    },
  },
  plugins: [],
}

