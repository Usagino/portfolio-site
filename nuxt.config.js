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
  plugins: [
    '~plugins/scroll.js',
    { src :'~/plugins/vue-parallax-js', ssr: false },
  ],
  mode: 'universal',
}
