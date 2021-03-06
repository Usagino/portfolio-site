import axios from 'axios'

module.exports = {
  head: {
    title: 'Frontartgraph',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'yuki ito Portfolio' },
      //{ name:"google-site-verification", content:"YgGTUH4xiuEVbvxh8XP911v5EW_CNOZUo-SvUcvRKk4"},
      { meta:'viewport',content:'width=device-width, initial-scale=1.0, minimal-ui'},
      { name: 'twitter:card' , content:'summary'},
      { name: 'twitter:site' , content:'@_Frontart'},
      { name: 'description', content:'画面の中のデザインだけではなく、使用者の将来までもをデザインできるデザイナーになりたいと考えている。趣味は写真とコーヒー。最近はモーショングラフィックスにはまっている。'},
      { property: 'og:url',content:'https://frontartgraph.com/' },
      { property: 'og:title',content:'Frontart' },
      { property: 'og:description',content:'This is my Portfolio' },
      { property: 'og:image',content:'https://frontartgraph.com/image/screen.png' },
      { name: 'google-site-verification',content:'I5npgtyBbLAzXczrlqCu5XyLT6xtnKvyA2oroNv1om0'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'https://use.typekit.net/mwt6wiq.css'}
    ],
  },

  build: {
    hardSource: true,
    extend(config, ctx) {},
    terser: {
      terserOptions: {
        compress: { drop_console: true }
      }
    }
  },
  loading: false,
  server: {
    port: 3000, // デフォルト: 3000
    // host: '0.0.0.0', // デフォルト: localhost
  },
  modules: [
    'nuxt-webfontloader',
    'nuxt-user-agent',
    'nuxt-fullpage.js',
    '@nuxtjs/style-resources',
    'nuxt-user-agent',
    '@nuxtjs/markdownit',
    '@nuxtjs/pwa',
    "@nuxtjs/axios",
  ],
  styleResources: {
    scss: '~/assets/style/style.scss',
  },
  webfontloader: {
    google: {
      families: ["Noto Sans JP",'Raleway']
    }
  },
  plugins: [
    {src: '~/plugins/decodeNode'},
    {src: '~/plugins/fetchData'},
    {src: '~/plugins/components'},
    { src: '~/plugins/swiper', ssr: false }
  ],
  // env: {
  //   CTF_SPACE_ID: config.CTF_SPACE_ID,
  //   CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
  //   CTF_PERSON_ID: config.CTF_PERSON_ID,
  //   CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID
  // },
  generate: {
    interval: 2000,
    async routes() {
      // paginate
      const paginate = await axios.get(
        "https://frontart-tokyo.microcms.io/api/v1/works",{
          headers: { "X-API-KEY": "79b473a7-50ee-4d1a-af50-5298d6a778d8" }
        }
      )
      const paginateRes = paginate.data.contents.map((res) => {
        return {
          route: '/works/' + res.id,
          payload: { paginate }
        }
      })
      // console.log(paginateRes)

      return Promise.all([paginateRes]).then((values) => {
        return [...values[0]]
      })
    }
  },
  mode: 'universal',
}
