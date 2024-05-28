import NextFederationPlugin from '@module-federation/nextjs-mf';

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    // specify remotes
    remote: `remote@http://localhost:3009/_next/static/${location}/remoteEntry.js`,
  };
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(isServer),
        exposes: {
          // Host app also can expose modules
        },
        shared: {
            'shared-library': {
              import: '../shared-library',
            },
        },
      })
    );

    return config;
  },
};

export default nextConfig;