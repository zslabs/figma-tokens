const path = require('path');
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/stories/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src/');
    config.module.rules.push(
      { test: /\.css$/, loader: [{ loader: 'style-loader' }, { loader: 'css-loader' }] },
    );
    console.log("after", config.module.rules);
    return config;
  },
}