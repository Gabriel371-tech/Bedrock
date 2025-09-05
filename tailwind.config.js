// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adicione todas as extensões e arquivos usados no seu projeto
  ],
  theme: {
    extend: {},
  },
  plugins: [
     require('@tailwindcss/forms'),
     require('@tailwindcss/typography'),
  ],
}
