const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html'
        })
    ],

    devServer: {
        contentBase: 'public',
        port: 49030
    },

    output: {
        path: path.join(__dirname, 'public/build'),
        publicPath: '/build/'
    }

}

