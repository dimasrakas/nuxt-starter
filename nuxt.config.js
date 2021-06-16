import i18n from './i18n'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt Starter Template by dimasrakas',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://github.com/nuxt-community/device-module
    '@nuxtjs/device',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Roboto: true,
          'Hind+Madurai': true,
        },
      },
    ],
    // https://github.com/harlan-zw/nuxt-build-optimisations
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/AlekseyPleshkov/nuxt-social-meta
    [
      'nuxt-social-meta',
      {
        url: 'Site url',
        title: 'Title',
        site_name: 'Site name',
        description: 'Site description',
        img: 'Link to image in static folder',
        locale: 'en_US',
        twitter: '@user',
        twitter_card: 'summary_large_image',
        themeColor: '#theme-color',
      },
    ],
    '@nuxtjs/moment',
    ['nuxt-i18n', i18n],
    '@nuxt/content',
    '@nuxtjs/auth-next',
    'nuxt-client-init-module',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  auth: {
    // Options
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}