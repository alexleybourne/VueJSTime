
module.exports = {
    publicPath: process.env.NODE_ENV === 'VUE_APP_GMAPSAPIKEY'
        ? '/production-sub-path/'
        : '/'
 }

    

