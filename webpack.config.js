const path = require('path');

module.exports = {
  entry: './src/index.js',
  node: {
   fs: "empty",
   net: "empty",
   tls: "empty",
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'

        ]
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist') 
  },
};
