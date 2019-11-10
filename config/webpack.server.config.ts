require('systemjs');
import path from 'path';
import webpack from 'webpack';
const nodeExternals = require('webpack-node-externals');

const config = (env: any, argv: any): webpack.Configuration => {
    const SERVER_PATH =
    (argv.mode === 'production') ?
    './lib/server/server-prod.ts' :
    './lib/server/server-dev.ts';

    return({
        entry: {
            server: SERVER_PATH,
        },
        output: {
            path: path.join(__dirname, '../dist'),
            publicPath: '/',
            filename: '[name].js',
        },
        target: 'node',
        node: {
        // Need this when working with express, otherwise the build fails
            __dirname: false,   // if you don't put this is, __dirname
            __filename: false,  // and __filename return blank or /
        },
        externals: [nodeExternals()], // Need this to avoid error when working with Express
        module: {
            rules: [
                // {
                //   // Transpiles ES6-8 into ES5
                //   test: /\.js$/,
                //   exclude: /node_modules/,
                //   use: {
                //     loader: "babel-loader"
                //   }
                // }
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    loader: "ts-loader",
                },
            ],
        },
    });
};

export default config;
