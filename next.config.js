/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif|woff|eot|ttf|svg)/,
                use: {
                    loader: 'file-loader',
                    options: {
                        limit: 50000,
                    },
                },
            },
        ],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
};

module.exports = nextConfig;
