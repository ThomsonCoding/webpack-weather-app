const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg)$/,
                type: 'asset',
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            }   
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'index.css',
            }),
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: [
                    '**/*',
                    path.join(process.cwd(), 'build/**/*')
                ]
            })
        ]
    };