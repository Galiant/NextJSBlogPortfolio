/* eslint-disable import/no-anonymous-default-export */
import { build } from 'velite';

/** @type {import('next').NextConfig} */
export default {
  webpack: config => {
    config.plugins.push(new VeliteWebpackPlugin());
    return config;
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

class VeliteWebpackPlugin {
  static started = false;
  apply(/** @type {import('webpack').Compiler} */ compiler) {
    // executed three times in nextjs
    // twice for the server (nodejs / edge runtime) and once for the client
    compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
      if (VeliteWebpackPlugin.started) return;
      VeliteWebpackPlugin.started = true;
      const dev = compiler.options.mode === 'development';
      await build({ watch: dev, clean: !dev });
    });
  }
}
