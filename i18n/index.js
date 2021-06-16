module.exports = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en.json',
    },
    {
      code: 'id',
      iso: 'id-ID',
      name: 'Indonesia',
      file: 'id.json',
    },
  ],
  strategy: 'no_prefix',
  defaultLocale: 'en',
  seo: false,
  lazy: true,
  langDir: 'i18n/',
  parsePages: false,
  vuex: {
    moduleName: 'i18n',
    mutations: {
      setLocale: false,
      setMessages: false,
    },
    preserveState: false,
  },
  pages: {},
  vueI18n: {
    fallbackLocale: ['en', 'id'],
  },
}
