/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['trueke.nodo.com.ec'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
    },
  }

export default nextConfig;
