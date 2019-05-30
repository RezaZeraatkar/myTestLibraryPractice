import {
  join
} from 'path';

export default () => ({
  mode: 'production',
  devtool: 'source-map',
  entry: join(__dirname, 'src', 'index'),
  output: {
    path: join(__dirname, 'dist'),
    filename: 'actornames.umd.min.js',
    libraryTarget: 'umd',
    library: 'actornames'
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
