/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'lastfm.freetls.fastly.net',
      port: '',
    }]
  }
}

module.exports = nextConfig
