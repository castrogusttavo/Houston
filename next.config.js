module.exports = {
  basePath: '/docs',
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          destination: '/docs/:path*',
          has: [
            {
              type: 'host',
              value: 'docs.houstonicons.com.br',
            },
          ],
        },
      ],
    }
  },
}
