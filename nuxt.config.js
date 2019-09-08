const config = require('./.contentful.json')

module.exports = {
  head: {
    title: 'Front-artgraph',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name: 'twitter:card' , content:'summary'},
      { name: 'twitter:site' , content:'@_Frontart'},
      { property: 'og:url',content:'https://frontart.tokyo/' },
      { property: 'og:title',content:'Frontart' },
      { property: 'og:description',content:'This is my Portfolio' },
      { property: 'og:image',content:'https://frontart.tokyo/image/screen.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'https://use.typekit.net/mwt6wiq.css'}
    ],
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
    '@nuxtjs/markdownit',
    'nuxt-user-agent',
    'nuxt-fullpage.js'
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
    { src: '~/plugins/fullpage', ssr: false }
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
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: config.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID
  },
  mode: 'universal',
}
