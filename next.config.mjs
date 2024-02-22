/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["naszsklep-api.vercel.app", "static-ourstore.hyperfunctor.com"],
    },
    experimental: {
        typedRoutes: true,
    },
    env: {
        GRAPHQL_URL: process.env.GRAPHQL_URL,
    },
    redirects: async () => {
        return [
            {
                source: "/products",
                destination: "/products/1",
                permanent: true,
            },
            {
                source: "/categories/:name",
                destination: "/categories/:name/1",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
