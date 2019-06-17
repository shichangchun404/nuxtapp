
module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0,user-scalable=no'}
    ],
    link: [
      
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/i18n'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    vendor: ['vue-i18n'], // webpack vue-i18n.bundle.js
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  generate: {
    routes: ['/', '/index', '/cn', '/en/']
  },
  router: {
    middleware: 'i18n' // middleware all pages of the application
    // extendRoutes(routes, resolve) {
    //   console.log('routes', routes)
    //   let index = routes.findIndex(it => it.name === 'top')
    //   routes[index] = {
    //     ...routes[index],
    //     components: {
    //       default: routes[index].component,
    //       top: resolve(__dirname, 'components/top.vue')
    //     },
    //     chunkNames: {
    //       top: 'components/top'
    //     }
    //   }
    //   console.log('routes[index]', routes[index])
    // }
  }
}
