const { setNuxtConfig } = require('@opendreamnet/nuxtjs-base')
const pkg = require('./package.json')

process.env.npm_package_name = pkg.name
process.env.npm_package_description = pkg.description
process.env.npm_package_displayName = pkg.displayName
process.env.npm_package_version = pkg.version

export default setNuxtConfig({
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    'node_modules/@opendreamnet/nuxtjs-base/plugins/boot.ts'
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/nuxt-community/gtm-module
    // ! Use v2.3.2: https://github.com/nuxt-community/gtm-module/issues/118
    '@nuxtjs/gtm'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  //
  publicRuntimeConfig: {
    githubURL: 'https://github.com/opendreamnet',
    twitterURL: 'https://twitter.com/opendreamnetdev',
    patreonURL: 'https://www.patreon.com/dreamnet'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
})
