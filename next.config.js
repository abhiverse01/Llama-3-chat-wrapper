// next.config.js
module.exports = {
    reactStrictMode: true,
    webpack(config, { isServer }) {
        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
                module: false,
                path: false,
                crypto: false,
                stream: false,
                os: false,
            };
        }
        return config;
    },
};
