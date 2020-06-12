const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin-webpack4");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpackCleanPlugin = require("webpack-clean-plugin");

module.exports = {
    entry:'./src/index.js',//入口
    output:{//输出
        filename:'bundlle.js',
        path:path.resolve(__dirname,'./web')
    },
    module:{
        rules:[//loaders
            {
                test:/\.vue$/,
                use:'vue-loader'//解析vue文件
            },
            {
                test:/\.js$/,
                use:'babel-loader'//解析es6到es5
            }
        ]
    },
    plugins:[
        new webpackCleanPlugin(),//每次输出资源前清空旧资源
        new VueLoaderPlugin(),////配合vue-loader解析vue文件
        new htmlWebpackPlugin({//自定义入口页面模板
            filename:'index.html',//入口页面名
            template:'./index.html'//入口页面模板
        })
    ]
}