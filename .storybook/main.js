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
    config.module.rules.map(rule => {
      if (/svg/.test(rule.test)) {
        // Silence the Storybook loaders for SVG files
        const newRule = { ...rule, exclude: /\.svg$/i };
        console.log(newRule);
        return { ...rule, exclude: /\.svg$/i }
      }
    },
      // Add your custom SVG loader
      {
        test: /\.svg$/i,
        issue: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ['@svgr/webpack'],
      }
    )
    return config;
  },
}