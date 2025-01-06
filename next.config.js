/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "www.kawneer.us",
      },
      {
        protocol: "https",
        hostname: "innovators.in",
      },
    ],
  },
};

module.exports = nextConfig;
