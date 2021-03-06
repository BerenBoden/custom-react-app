const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rules = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        }
    },
    {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
    }
]

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    Output: {
        filename: 'bundle.js',
        Path: path.resolve(__dirname, '/build')
    },
    module: {rules},
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}
