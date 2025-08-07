import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'standalone',
    experimental: {
        optimizePackageImports: ['lucide-react'],
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                ],
            },
        ]
    },
    /* config options here */
}

export default nextConfig
