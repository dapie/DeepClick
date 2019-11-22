
module.exports = {
  mode: 'universal',
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#ffffff'},
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png'},
      { name: 'theme-color', content: '#ffffff'},
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-icon-57x57.png'},
      { rel: 'apple-touch-icon', href: '/apple-icon-60x60.png'},
      { rel: 'apple-touch-icon', href: '/apple-icon-72x72.png'},
      { rel: 'apple-touch-icon', href: '/apple-icon-76x76.png'},
      { rel: 'apple-touch-icon', href: '/apple-icon-114x114.png'},
      { rel: 'apple-touch-icon', href: '/apple-icon-120x120.png'},
      { rel: 'apple-touch-icon', href: '/apple-icon-144x144.png'},
      { rel: 'apple-touch-icon', href: '/apple-icon-152x152.png'},
      { rel: 'apple-touch-icon', href: '/apple-icon-180x180.png'},
      { rel: 'icon', type: 'image/png', href: '/android-icon-192x192.png'},
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png'},
      { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png'},
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png'},
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
    '~assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/style-resources',
    '@nuxtjs/device',
    ['nuxt-fontawesome', {
      imports: [
        //import whole set
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        },
      ]
    }]
  ],
  styleResources: {
    scss: ['~assets/scss/main.scss']
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'http://0.0.0.0:8000/',
  },
  /*
  ** Nuxt Auth
  */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
        }
      }
    },
    redirect: {
      home: '/deeplinks'
    }
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
