/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
<<<<<<< HEAD
  redirects: async () => {
    return [
      {
        source: '/redirect',
        destination: '/redirect/home',
        permanent: false,
      },
      {
        source: '/redirect/user/:id',
        destination: '/redirect/home',
        permanent: false,
      },
      {
        source:'/redirect/user',
        destination:'/redirect/home',
        permanent:false
      }
    ]
=======

  images: {
    domains: ["http://localhost:3000"],
>>>>>>> 77e9aea7d4a7df69af718a1bd2d36f2b4a89e447
  }
};

export default nextConfig;
