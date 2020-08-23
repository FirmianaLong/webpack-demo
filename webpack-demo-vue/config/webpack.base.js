const path = require('path');
// 引入自动生成html插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 分离css
const MinCssExtractPlugin = require('mini-css-extract-plugin')
//删除dist
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'js/bundle.js'
    },

    module: {

        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MinCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                }, 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: MinCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                }, 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100 * 1024,
                            name: '[name].[ext]',
                            publicPath: '../images/',
                            outputPath: 'images/'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // ... 其它规则
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ],
    },


    plugins: [
        //自动生成
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        //分离
        new MinCssExtractPlugin({
            filename: 'css/index.css'
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
        

    ]
}
