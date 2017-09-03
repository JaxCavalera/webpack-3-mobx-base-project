// NPM Modules
import path from 'path';
import { HotModuleReplacementPlugin } from 'webpack';

// Base config
import baseConfig from './webpack-common.config.babel';

const devConfig = baseConfig;

devConfig.devtool = 'inline-source-map';
devConfig.devServer = {
    hot: true,
};

devConfig.plugins = [
    ...devConfig.plugins,
    new HotModuleReplacementPlugin(),
];

export default devConfig;
