/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache.js');

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'couple-app-dev.s3.ap-northeast-2.amazonaws.com',
                port: '',
                pathname: '/diaries/**',
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
    withPWA: {
        pwa: {
            dest: 'public',
        },
    },
};

const config = withPWA({
    dest: 'public',
    runtimeCaching: runtimeCaching,
})(nextConfig);

module.exports = config;
