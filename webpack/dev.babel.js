import webpack from 'webpack'
import baseConfig from './base.babel'

const host = 'localhost'
const port = Number(process.env.PORT) || 3000

export default {
  ...baseConfig,
  entry: ['react-hot-loader/patch', ...baseConfig.entry],
  devtool: 'cheap-module-source-map',
  devServer: { host, port, historyApiFallback: true },
  output: {
    ...baseConfig.output,
    publicPath: `http://${host}:${port}/dist/`,
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.IgnorePlugin(/[^/]+\/[\S]+.prod$/),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
}
