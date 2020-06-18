const path = require('path');
const VueLoaderPlugin = require("vue-loader/lib/plugin-webpack4");//解析vue文件

//导入插件
const webpackCleanPlugin = require("webpack-clean-plugin");//清理旧资源
const htmlWebpackPlugin = require("html-webpack-plugin");//模板插件

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'abcd.js',
        path:path.resolve(__dirname,'./web')
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:"vue-loader"//解析vue文件
            }
        ]
    },
    plugins:[//应用插件
        new webpackCleanPlugin(),
        new VueLoaderPlugin(),//解析vue文件
        new htmlWebpackPlugin({
            template:'./index.html'//入口模板
        })
    ],
    resolve:{
        extensions:['.js','.json','.vue'],//扩展名省略配置
        alias:{//模块别名
            "vue":"vue/dist/vue.js"
        }
    },
    devServer:{
        proxy:{
            "/api":{
                target:"http://jsonplaceholder.typicode.com",
                pathRewrite: {"^/api" : ""}
            }
        }
    }
}
