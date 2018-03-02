var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpackBaseConfig = require('./webpack.base.conf')

module.exports = merge(webpackBaseConfig, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"develop"',
                API_ROOT: '"/api"',
                ROUTER_ROOT: '"/"',
            }
        })
    ],
    devServer: {
        noInfo: true
    },
    server: {
        port: 8888, // server port
        proxy: {
            host: 'http://192.168.18.56/', // proxy url
            match: /^\/hb-app/ // proxy match regexp
        }
    }
})