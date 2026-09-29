/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/home.jpg')",
        handprints: "url('/handprints.jpg')",
      },
      height: {
        h26: '26rem',
        h28: '28rem'
      },
    },
  },
  plugins: [require('daisyui')],
}
