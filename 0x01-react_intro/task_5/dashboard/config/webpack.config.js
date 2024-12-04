const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point for your app
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map', // Inline source map for debugging
  devServer: {
    static: './dist', // Serve files from the 'dist' folder
    hot: true,        // Enable hot module reloading
    open: true,       // Automatically open the browser
    port: 3000,       // Dev server runs on port 3000
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/, // Match .js and .jsx files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Match .css files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/, // Match image files
        type: 'asset/resource',        // Use Webpack's asset modules for images
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve both .js and .jsx files
  },
};
