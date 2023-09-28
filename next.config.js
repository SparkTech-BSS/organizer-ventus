/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mov|mp4)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'static/videos',
          publicPath: '_next/static/videos',
        },
      },
    });
    return config;
  },
  pageExtensions: ["page.tsx", "api.ts", "api.tsx"],
}

module.exports = nextConfig
