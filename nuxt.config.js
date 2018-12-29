const modulesBase = process.env.NODE_ENV === 'production' ? {
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-125972611-2'
    }]
  ],
} : {}

module.exports = {
  head: {
    title: 'nabehide\'s portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'This site is created by myself using WebGL(Three.js), Nuxt.js and GLSL.' },
      { property: 'og:title', content: 'nabehide portfolio' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://nabehide.github.io' },
      { property: 'og:description', content: 'This site is created with Nuxt.js and Three.js(WebGL/GLSL).' },
      { property: 'og:image', content: 'https://nabehide.github.io/thumbnail.png' },

      { property: 'og:twitter:card', content: 'card' },
      { property: 'og:twitter:site', content: '@____nabehide' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  env: {
    wallpapers: [
      { name: "arabesque" },
      { name: "circlesInLine" },
    ],
  },
  css: [
    'normalize.css',
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-free-webfonts',
    '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css',
  ],
  build: {
    // analyze: true,
    extend(config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.(glsl|frag|vert)$/,
        loader: 'raw-loader',
        exclude: '/node_modules/',
      })
    },
  },
  ...modulesBase,
}
