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
    console.log("before", config.module.rules);
    config.resolve.alias['@'] = path.resolve(__dirname, '../src/');
    // const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test( "/\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/"));
    // fileLoaderRule.exclude = /\.svg$/
    config.module.rules.push(
      { test: /\.css$/, loader: [{ loader: 'style-loader' }, { loader: 'css-loader' }]},
    );
    console.log("after", config.module.rules);
    return config;
  },
}