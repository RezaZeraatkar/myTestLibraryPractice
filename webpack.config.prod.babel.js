import {
  join
} from 'path';

export default () => ({
  mode: 'production',
  devtool: 'source-map',
  entry: join(__dirname, 'src', 'index'),
  output: {
    path: join(__dirname, 'dist'),
    filename: 'starWarsNames.umd.min.js',
    libraryTarget: 'umd',
    library: 'starWarsNames'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  }
});
