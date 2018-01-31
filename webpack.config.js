module.exports = {
    entry: './main.js',
    output: {
      path: __dirname,
      filename: 'build.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        }
      ]
    }
  }