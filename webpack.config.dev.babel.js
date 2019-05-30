import {
  join
} from 'path';

export default () => ({
  mode: 'development',
  entry: join(__dirname, 'src', 'index'),
  output: {
    path: join(__dirname, 'dist'),
    filename: 'starWarsNames.umd.js',
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
