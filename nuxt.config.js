module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'starter',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        script: [
            {
                src: 'https://og6593g2z.qnssl.com/fundebug.0.1.7.min.js',
                apikey: '590defb9e72e26001af0df8b14597c221b36118c2f3a5f589fdea736b28202b3'
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#3B8070' },
    env: {
        // baseUrl:
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLINT on save
         */
        // extend (config, ctx) {
        //   if (ctx.isClient) {
        //     config.module.rules.push({
        //       enforce: 'pre',
        //       test: /\.(js|vue)$/,
        //       loader: 'eslint-loader',
        //       exclude: /(node_modules)/
        //     })
        //   }
        // }
    }
}
