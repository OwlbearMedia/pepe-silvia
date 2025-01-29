import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination: 'http://ec2-44-242-150-60.us-west-2.compute.amazonaws.com/api/:path*',
      },
    ]
  },
};

export default nextConfig;
