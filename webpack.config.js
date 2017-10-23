// entry point -> output (app.bundle.js)
const path = require('path');
const publicPath = path.join(__dirname, 'public');

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: publicPath,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: publicPath
    }
};