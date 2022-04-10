module.exports = {
  async rewrites() {
    return [
      {
        destination: '/src/pages/api',
        source: '/api',
      },
    ]
  },
}