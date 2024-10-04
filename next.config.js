module.exports = {
  async rewrites() {
    return [
      {
        source: '/(.*)',
        destination: '/docs/$1',
        has: [
          {
            type: 'host',
            value: 'https://docs.houstonicons.com.br',
          },
        ],
      },
    ]
  },
}
