
module.exports = {
  router: {
    base: '/translator/'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Ajira GIS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  mode: 'spa',
  generate: {
    fallback: true // if you want to use '404.html'
  },
  plugins: ['~/plugins/vuetify.js', '~/plugins/fireauth.js'],
  css: [
    '~/assets/style/app.styl'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      '~/plugins/vuetify.js',
      '~/plugins/fireauth.js'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  },
  env: {
    // APIBaseUrl: process.env.API_BASE_URL || 'http://localhost:8000/ajiragis/api/v1/',
    APIBaseUrl: process.env.API_BASE_URL || 'https://dev1.ajira.world/ajiragis/api/v1/',
    LoginUrl: process.env.LOGIN_URL || 'https://login.ajiradigital.go.ke/auth'
  }
}
