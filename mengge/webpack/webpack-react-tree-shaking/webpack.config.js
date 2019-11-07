module.exports = {
  module: {
    rule: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}