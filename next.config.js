module.exports = {
  async rewrites() {
    return [
      {
        source: '/src/pages/api',
        destination: '/api',
      },
    ]
  },
}