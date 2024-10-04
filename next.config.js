module.exports = {
  async rewrites() {
    return [
      {
        source: '/(.*)',
        destination: '/docs/$1',
        has: [
          {
            type: 'host',
            value: 'docs.houstonicons.com.br',
          },
        ],
      },
    ]
  },
}
