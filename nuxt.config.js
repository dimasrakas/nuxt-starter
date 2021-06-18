import i18n from './i18n'

export default {
  target: 'static',
  head: {
    title: 'Nuxt Starter Template by dimasrakas',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [],
  components: ['~/components', '~/components/icons/Md'],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/device',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Open+Sans': [100, 200, 300, 400, 500, 600, 700, 800],
          'Hind+Madurai': true,
          Inter: [100, 200, 300, 400, 500, 600, 700],
        },
      },
    ],
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
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

  axios: {},
  auth: {
    // Options
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  build: {},
}
