import path from 'path';

export default {
    entry: {
        app: ['./src/index.js'],
    },
    output: {
        path: path.resolve(__dirname, 'build/assets/js'),
        publicPath: 'assets/js',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'isomorphic-style-loader',
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
                            plugins: (loader) => [
                                require('postcss-import')({
                                    root: loader.resourcePath,
                                }),
                                require('postcss-cssnext')(),
                                require('autoprefixer')({
                                    browsers: '> 3%',
                                }),
                            ],
                        },
                    },
                ],
            },
        ],
    },
};
