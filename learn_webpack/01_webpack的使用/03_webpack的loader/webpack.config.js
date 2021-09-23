const path = require('path')

module.exports = {
    //入口
    entry: './src/main.js',
    //出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: ["style-loader", "css-loader"],
            },
          ],
    }
}