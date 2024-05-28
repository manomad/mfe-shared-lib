import NextFederationPlugin from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, {isServer}) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "remote",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          './HeaderA': './src/components/HeaderA',
          './HeaderB': './src/components/HeaderB'  
        },
        shared: {
          'shared-library': {
            import: '../shared-library/src',
          },
        },
      })
    );
    return config;
  }
};

export default nextConfig;
