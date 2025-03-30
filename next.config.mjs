/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://my-backend-aws.duckdns.org/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;
  