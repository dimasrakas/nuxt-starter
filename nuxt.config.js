import i18n from './i18n'

export default {
  target: 'static',
  head: {
    title: 'Nuxt Starter Template by @dimasrakas',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
  },
  pwa: {
    manifest: {
      lang: 'en',
      name: 'dimasrakas',
      short_name: 'dimasrakas',
      display: 'standalone',
      theme_color: '#007aff',
    },
    icons: {
      /* icon options */
      iconFileName: process.env.NODE_ENV === 'staging' ? 'icon.png' : 'pwa-ordercollection.png',
    },
  },
  css: [],
  layoutTransition: {
    name: 'zoom-fade',
    mode: 'out-in',
  },
  pageTransition: {
    name: 'zoom-fade',
    mode: 'out-in',
  },
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
        url: 'https://nuxt.starter.dimasrakas.com',
        title: 'Nuxt Starter Template by @dimasrakas',
        site_name: 'Nuxt Starter Template by @dimasrakas',
        description: '@dimasrakas - A small man with shuriken ambition',
        img: '/preview.jpg',
        locale: 'en_US',
        twitter: '@dimasrakas',
        twitter_card: '/preview.jpg',
        themeColor: '#0064F9',
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
