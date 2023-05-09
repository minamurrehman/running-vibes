const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["picsum.photos", "res.cloudinary.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
