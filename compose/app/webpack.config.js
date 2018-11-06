const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('.') + '/web',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './web',
    hot: true

 },
  module:{
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }   
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]

}
