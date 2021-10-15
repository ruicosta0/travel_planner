const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
//const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    plugins: [
        new CleanWebpackPlugin({
            // Simulate the removal of files
            //By default, this plugin will remove all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild.
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
});
