/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ik.imagekit.io',
            port: '',
            pathname: '/mce8nb2epw/**',
          },
        ],
      },
      experimental: {
        serverActions: true,
      }
}

module.exports = nextConfig
