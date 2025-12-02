/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    protocols: ["https"],
    // hostname: "images.pexels.com",
    domains: ["images.pexels.com"],
  },
};

export default nextConfig;
