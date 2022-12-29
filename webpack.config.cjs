const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'React App',
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts$|tsx/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        },
      },
      {
        test: /\.css$|.scss/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: [
          '@svgr/webpack'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      '~components': path.resolve(__dirname, 'src/components'),
      '~assets': path.resolve(__dirname, 'src/assets'),
      '~utils': path.resolve(__dirname, 'src/utils'),
      '~hooks': path.resolve(__dirname, 'src/hooks'),
      '~interfaces': path.resolve(__dirname, 'src/interfaces'),
      '~constants': path.resolve(__dirname, 'src/constants'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
};
