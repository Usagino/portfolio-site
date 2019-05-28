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
    // '@nuxtjs/markdownit'
  ],
  styleResources: {
    sass: [
      '~/assets/style/_variable.scss',
      '~/assets/style/_reset.scss',
    ],
  },
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP','Raleway']
    }
  },
  // markdownit: {
  //   injected: true, // $mdを利用してmarkdownをhtmlにレンダリングする
  //   breaks: true, // 改行コードを<br>に変換する
  //   html: true, // HTML タグを有効にする
  //   linkify: true, // URLに似たテキストをリンクに自動変換する
  //   typography: true,  // 言語に依存しないきれいな 置換 + 引用符 を有効にします。
  //   use: [
  //     'markdown-it-toc' // 目次を作るためのライブラリ。別途インストールが必要
  //   ]
  // },
  mode: 'universal',
}
