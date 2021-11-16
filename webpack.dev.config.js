const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
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
            test: /\.css$/,
            use: [
                'style-loader', 'css-loader'
            ]
        },
        {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader, 'style-loader', 'css-loader', 'sass-loader'
            ]
        }    
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                path.join(process.cwd(), 'build/**/*')
            ]
        }),
    ]
};