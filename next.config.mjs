/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  experimental: {
    turbo: {
      enabled: false,
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
};

export default nextConfig;
