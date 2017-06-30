var path = require('path')
var configPath = require('./path')
    // var utils = require('./utils')
var webpack = require('webpack')
var projectRoot = path.resolve(__dirname, '../')
    // var isProduction = process.env.NODE_ENV !== 'development';
const fs = require('fs')

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });
// console.log('base conf', process.env.NODE_ENV, 'isProduction :', isProduction)
module.exports = {
    entry: {
        // 首页
        // app: './src/app.js',
        server: path.resolve(__dirname, '../server')
            // weekly: './src/view/weekly/app'
            // vendor: ['vue', 'vuex', 'vue-router', 'axios']
    },
    output: {
        path: configPath.serverBuildPath,
        filename: '[name].js',
        sourceMapFilename: '[name].map',
        publicPath: configPath.publicPath,
        libraryTarget: 'commonjs2'
    },
    // require 解析
    resolve: {
        extensions: ['.js', 'json'], // 当require找不到模块添加后缀
        modules: [
            path.join(__dirname, '../src'),
            'node_modules'
        ],
        alias: {}
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: projectRoot,
                exclude: /node_modules/
            }
        ]
    },
    externals: nodeModules,
    target: 'node',
    // node: {
    //     Buffer: false,
    //     fs: 'empty'
    // },
    plugins: [
        // new webpack.DefinePlugin({ 'process.env': config.dev.env }),
        new webpack.NoEmitOnErrorsPlugin()
    ]

}
