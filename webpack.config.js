const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    resolve: {
        extensions: ['.vue', '.js'],
        alias: {
            '~': path.resolve(__dirname, 'src'),
        },
        fallback: {
            "fs": false,
            "path": false ,
            "os": false
        }
    },
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.s?css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    plugins : [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new Dotenv(),
    ],
    devServer: {
        port: 1234,
        historyApiFallback: true,
        static: __dirname + "/dist/"
    }
};