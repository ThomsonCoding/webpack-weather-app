const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    module: {
    rules: [
        {
            test: /\.(png|jpg|jpeg)$/,
            type: 'asset',
        },
        {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
            ]
        },    
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
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