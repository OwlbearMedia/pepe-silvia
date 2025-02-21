import type { NextConfig } from 'next';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';

module.exports = async (phase: string) => {
  const nextConfig: NextConfig = {
    /* config options here */
  }

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    nextConfig.rewrites = async () => {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:5328/api/:path*',
        },
      ]
    }
  }

  return nextConfig
}