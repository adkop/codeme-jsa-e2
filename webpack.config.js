const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = new ExtractTextPlugin("styles.css");

module.exports = {
    entry: {
        app: ["./src/js/index.js", "./src/css/style.css"]
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        port: 3000
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: "CODE:ME JavaScript",
            chunks: ["app"],
            template: "./src/index.ejs"
        }),
        extractCSS
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    }
};