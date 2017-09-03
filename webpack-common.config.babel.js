// NPM Modules
import path from 'path';
import { optimize } from 'webpack';
import postcssImport from 'postcss-import';
import precss from 'precss';
import autoprefixer from 'autoprefixer';

// Package.json
import pkg from './package.json';

const jsRules = {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
};

const cssRules = {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
        {
            loader: 'style-loader',
        },
        {
            loader: 'css-loader',
            options: {
                importLoaders: 1,
            },
        },
        {
            loader: 'postcss-loader',
            options: {
                plugins: loader => [
                    postcssImport({
                        root: loader.resourcePath,
                    }),
                    precss(),
                    autoprefixer({
                        browsers: '> 3%',
                    }),
                ],
            },
        },
    ],
};

const vendorList = [
    ...Object.keys(pkg.dependencies).slice(1),
];

export default {
    entry: {
        app: ['./src/index.js'],
        vendor: vendorList,
    },
    output: {
        path: path.resolve(__dirname, './build/assets/js'),
        publicPath: 'assets/js',
        filename: '[name].js',
    },
    module: {
        rules: [
            jsRules,
            cssRules,
        ],
    },
    plugins: [
        new optimize.CommonsChunkPlugin({
            names: ['vendor'],
            minChunks: 2,
        }),
    ],
};
