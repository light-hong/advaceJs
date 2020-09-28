const path = require('path')

const dirResolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      '@': dirResolve('src'),
      '_a': dirResolve('src/assets'),
      '_c': dirResolve('src/components'),
      '_s': dirResolve('src/services')
    }
  }
}
