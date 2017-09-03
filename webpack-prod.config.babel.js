// NPM Packages
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

// Config Imports
import baseConfig from './webpack-common.config.babel';

const prodConfig = baseConfig;

prodConfig.plugins = [
    ...prodConfig.plugins,
    new BundleAnalyzerPlugin({
        analyzerMode: 'static',
    }),
];

export default prodConfig;
