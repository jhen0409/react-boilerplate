require('babel-core/register')({
  babelrc: false,
  presets: ['stage-1'],
  plugins: ['transform-es2015-modules-commonjs'],
})
