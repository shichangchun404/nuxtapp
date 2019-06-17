
module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0,user-scalable=no'},
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=Edge,chrome=1'},
      { hid: 'keywords', name: 'keywords', content: '帮助文档,新手上云,自助服务,OpenAPI & SDK'},
      { hid: 'description', name: 'description', content: '帮助用户快速全面了解京东云的产品，提供快速上手文档及视频讲解，OpenAPI & SDK使京东云的用户更加灵活地控制自己的云上资源，无需复杂编程就可以访问京东云提供的各种服务。'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      { rel: 'stylesheet',href: '//static-portal.jdcloud.com/jcloud/jc/2.2.0/css/common.css'},
      { rel: 'stylesheet', href: '//static-portal.jdcloud.com/jcloud/jc/2.2.0/widget/jdc-side-panel/jdc-side-panel.css'},
      { rel: 'stylesheet', href: '//static-portal.jdcloud.com/jcloud/jcloud-portal/gb/css/gb.css'},
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
