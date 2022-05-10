const path = require('path');
module.exports = {
  stories: [ "../src/**/*.stories.mdx", "../src/stories/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  webpackFinal: async (config, { configType }) => {
    config.mode = 'none';
    config.resolve.alias['@'] = path.resolve(__dirname, '../src/');
    return config;
  },
}