/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/services',
        has: [{ type: 'query', key: 'filter', value: 'profile' }],
        destination: '/services/profile',
        permanent: true,
      },
      {
        source: '/services',
        has: [{ type: 'query', key: 'filter', value: 'industry' }],
        destination: '/services/industry',
        permanent: true,
      },
      {
        source: '/services',
        has: [{ type: 'query', key: 'filter', value: 'service' }],
        destination: '/services/service',
        permanent: true,
      },
    ];
  },
  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',

  typescript: {
      ignoreBuildErrors: true,
    },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'img.rocket.new',
      },
    ],
  }
};

export default nextConfig;
