module.exports = {
  mode: 'jit',
  presets: [
    require('@opendreamnet/nuxtjs-base/tailwind.config')
  ],
  theme: {
    extend: {
      colors: {

      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/line-clamp')
  ]
}