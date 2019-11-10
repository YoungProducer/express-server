import path from 'path';
import webpack from 'webpack';
// tslint:disable-next-line:variable-name
const HtmlWebPackPlugin = require('html-webpack-plugin');

const config: webpack.Configuration = {
    entry: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './lib/index.ts'],
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: './',
        filename: '[name].js',
    },
    mode: 'development',
    target: 'web',
    devtool: 'source-map',
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    emitWarning: true,
                    failOnError: false,
                    failOnWarning: false,
                },
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "prettier-loader",
                exclude: /node_modules/,
            },
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: "babel-loader",
            // },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "ts-loader",
            },
            {
                // Loads the javacript into html template provided.
                // Entry point is set below in HtmlWebPackPlugin in Plugins
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        // options: { minimize: true }
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
            excludeChunks: ['server'],
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
};

export default config;
