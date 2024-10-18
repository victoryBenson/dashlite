// config-overrides.js
const { override, addBabelPreset, addBabelPlugins } = require('customize-cra');

module.exports = override(
  addBabelPreset('@babel/preset-react'),
  addBabelPlugins(
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-transform-runtime' 
  ),
);
