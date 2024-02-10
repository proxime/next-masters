/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "naszsklep-api.vercel.app",
            },
        ],
    },
    experimental: {
        typedRoutes: true,
    },
};

export default nextConfig;
