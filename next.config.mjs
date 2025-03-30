/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://3.34.137.10:3000/:path*',
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  