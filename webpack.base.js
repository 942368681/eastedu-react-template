const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const Happypack = require('happypack');


module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'js/[name].bundle.[hash:8].js',
        publicPath: './'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx'],
        alias: {
            '@utilities': path.resolve(__dirname, 'src/common/utils'),
            '@api': path.resolve(__dirname, 'src/common/ajax/api.js')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "eslint-loader",
                enforce: "pre",
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ]
            },
            {
                test: /\.(js|jsx)$/,
                use: "Happypack/loader?id=js",
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[path]-[name]-[local]-[hash:base64:6]'
                        }
                    },
                    'postcss-loader'
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'src/common')
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ],
                include: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'src/common')
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 2*1024,
                            name: '[name]_[hash:6].[ext]',
                            outputPath: 'img/'
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name]_[hash:6].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: ["html-withimg-loader"]
            }
        ]
    },
    // 插件
    plugins: [
        new Happypack({
            id: 'js',
            use: ["babel-loader"]
        }),
        new webpack.DefinePlugin({
            ENV_MODE: JSON.stringify(process.env.mode)
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css'
        })
    ]
};