/** @type {import('next').NextConfig} */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
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
