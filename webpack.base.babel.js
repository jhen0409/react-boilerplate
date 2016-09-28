import path from 'path'
import { babel as babelConfig } from './package.json'

babelConfig.presets[0] = ['es2015', { modules: false }]
babelConfig.babelrc = false

export default {
  entry: ['rxjs', './app/index'],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: /app/,
      query: babelConfig,
    }],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js'],
  },
}
