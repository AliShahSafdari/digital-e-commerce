/** @type {import('next').NextConfig} */
const nextConfig = {
    // images:{
    //     domains:['http://localhost:1337']
    // }
    images: {
        domains: ["localhost"],
      }
    // images: {
    //     remotePatterns: [
    //         {
    //           protocol: 'http',
    //           hostname: 'localhost:1337',
    //         },
    //       ],
    //           }
};

export default nextConfig;
