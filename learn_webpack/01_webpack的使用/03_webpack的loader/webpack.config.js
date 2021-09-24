const path = require('path')

module.exports = {
    //入口
    entry: './src/main.js',
    //出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: ["style-loader", "css-loader"],
            },
            {
              test: /\.less$/,
              use: [{
                  loader: "style-loader", // creates style nodes from JS strings
              }, {
                  loader: "css-loader" // translates CSS into CommonJS
              }, {
                  loader: "less-loader", // compiles Less to CSS
              }]
            },
            {
              test: /\.(png|jpg|gif|jpeg)$/,
              use: [{
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name: 'img/[name].[hash:8].[ext]'
                },
              }]
            }
          ],
    }
}