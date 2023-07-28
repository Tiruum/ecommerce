module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
  safelist: [
    "bg-yellow-300",
    "bg-green-900",
    "bg-orange-500",
    "bg-slate-800",
  ]
}