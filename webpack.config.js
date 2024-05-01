const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      clean: true
    },
    performance: {
      hints: false,
    },
    mode: 'development',
    plugins: [new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })], 
    devServer: {
        static: {
          directory: path.resolve(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    rootMode: "upward",
                  }
                }
            },
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },

        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
          '@': path.resolve(__dirname, 'src')
        }
    }
}