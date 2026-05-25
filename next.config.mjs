/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
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
  }
};

export default nextConfig;
