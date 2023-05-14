/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    serverActions:true,
  },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'eurekastagingassets.azureedge.net',
          },
        ],
      },
}

module.exports = nextConfig
