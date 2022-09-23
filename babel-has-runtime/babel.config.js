module.exports = function (api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '30',
        },
        corejs: '3.9.0',
        useBuiltIns: 'usage',
      },
    ],
  ]
  // const plugins = []
  const plugins = ['@babel/plugin-transform-runtime']

  return {
    presets,
    plugins,
  }
}
