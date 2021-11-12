module.exports = {
  async rewrites() {
    console.log('I rewrouted! Rawr');

    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
    ];
  },
};
