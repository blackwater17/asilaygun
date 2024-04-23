/** @type {import('next').NextConfig} */

import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const nextConfig = {

    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  
        config.module.rules.push({
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset/resource',
        });
        return config;
    },

    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};

export default nextConfig;
