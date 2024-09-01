module.exports = function(api) {
  // Disable cache specifically for the dotenv plugin
  api.cache(false);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv']
    ],
  };
};
