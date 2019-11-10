// import 'babel-polyfill';
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import mainRouter from '../src/routes/index';
import config from '../../config/webpack.dev.config';

const app = express();
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, '/index.html');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: '/',
}));

app.use(webpackHotMiddleware(compiler));

// app.get('/signin', (req, res, next) => {
//     res.send({a: 'hello'});
//     res.end();
//   })

// app.get('*', (req, res, next) => {
//   compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
//     if (err) {
//       return next(err)
//     }
//     res.set('content-type', 'text/html');
//     res.send(result);
//     res.end();
//   });
// });

app.use('/', mainRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`);
    console.log('Press Ctrl+C to quit.');
});
