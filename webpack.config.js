const path = require('path')
/* directly passing './src/index.js' and './public', may not work in non-Unix 
systems, due to how paths are handled. Thus, we use path.resolve to guarantee 
our app will run in any OS*/

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer:{
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {  // Use babel-loader for .js files outside node_modules
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
};