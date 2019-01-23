// vue.config.js
module.exports = {
    baseUrl: process.env.VUE_APP_BASE_URL_FE,
    runtimeCompiler: true,
    devServer: {
        disableHostCheck: true,
        host: 'vmall.dev.com',
        proxy: {
            '/api': {
                target: 'http://vmallx-app.vs.care001.cn',
                changeOrigin: true,
                // ws: true,
                pathRewrite: {
                    // '^/api': ''
                }
            }
        }
    }
}