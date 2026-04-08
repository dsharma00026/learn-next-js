/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    domains: ["http://localhost:3000"],
  }
};

export default nextConfig;
