// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
  
  
// }


module.exports = {
  reactStrictMode: true,
  env: {
    MODE: "development",
    API_URL: process.env.API_URL,
    TENANT:process.env.TENANT,
    APIGATEWAY_URL:process.env.APIGATEWAY_URL,

  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['upload.wikimedia.org'],
  },
};


// module.exports = nextConfig

// module.exports = {
 
// };



