import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Move 'turbopack' out of 'experimental'
  turbopack: {
    resolveAlias: {
      '@/app/generated/prisma/client': './app/generated/prisma/client',
    },
  },
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],    
  },
};

export default nextConfig;
