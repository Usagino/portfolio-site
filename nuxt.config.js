module.exports = {
  head: {
    title: 'Front-artgraph',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    link: [
      {
        rel: 'stylesheet', href:'https://use.typekit.net/mwt6wiq.css'
      }
    ]
  },

  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  loading: false,
  server: {
    port: 3000, // デフォルト: 3000
    // host: '0.0.0.0', // デフォルト: localhost
  },
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    '@nuxtjs/markdownit'
  ],
  styleResources: {
    sass: [
      '~/assets/style/_variable.scss',
      '~/assets/style/_reset.scss',
      '~/assets/style/_transition.scss',
    ],
  },
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP','Raleway']
    }
  },
  plugins: [
    { src: '~/plugins/lazy', ssr: true },
    { src: '~/plugins/vue-masonry', ssr: false },
    { src: '~/plugins/magic-grid', ssr: false },
    { src: '~/plugins/vue-masonry-css', ssr: false }
  ],
  markdownit: {
    preset: 'default',
    injected: true,
    breaks: true,
    html: true,
    linkify: true,
    typography: true,
    xhtmlOut: true,
    langPrefix: 'language-',
    quotes: '“”‘’',
  },
  mode: 'universal',
}
