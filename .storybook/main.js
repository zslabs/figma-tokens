const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/stories/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-postcss",
    "multiple-themes-stitches",
  ],
  framework: "@storybook/react",
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src/');
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              require('tailwindcss'),
              require('autoprefixer'),
            ],
          },
        },
      ],
      include: path.resolve(__dirname, '../src/app/styles/main.css'),
    });

    const assetRule = config.module.rules.find(({ test }) => test?.test(".svg"));
    console.log(assetRule);

    const assetLoader = {
      loader: assetRule.loader,
      options: assetRule.options || assetRule.query
    };

    config.module.rules.unshift({
      test: /\.svg$/,
      use: ["@svgr/webpack", assetLoader]
    });

    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    console.log(config.module.rules);
    return config;
  },
}