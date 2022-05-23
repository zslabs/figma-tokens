const path = require('path');

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/stories/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-postcss"
  ],
  framework: "@storybook/react",
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src/');

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
    console.log(config.module.rules);
    return config;
  },
}