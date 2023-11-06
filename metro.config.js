const {resolve} = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    extraNodeModules: {
      axios: resolve(__dirname, './node_modules/axios/index.js'),
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
