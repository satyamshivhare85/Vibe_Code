import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },


  //for handling cors

  async headers() {
    return [
      { 
        //apply to all routes
        source:'/:path*',
        headers:[
          { key: 'Cross-origin-Opener-Policy',
             value: 'same-origin' },
          { key: 'Cross-origin-Embedder-Policy',
              value: 'require-corp' },
        ]
      }
    ]
  }   
};

export default nextConfig;