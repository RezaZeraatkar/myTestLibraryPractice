import {
  join
} from 'path';

export default () => ({
  mode: 'development',
  entry: join(__dirname, 'src', 'index'),
  output: {
    path: join(__dirname, 'dist'),
    filename: 'actornames.umd.js',
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
