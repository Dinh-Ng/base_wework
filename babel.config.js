module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src/',
          // 'src/components/*': './src/components/*',
          // 'src/constants/*': './src/constants/*',
          // 'src/hooks/*': './src/hooks/*',
          // 'src/models/*': './src/models/*',
          // 'src/navigation/*': './src/navigation/*',
          // 'src/scenes/*': './src/scenes/*',
          // 'src/services/*': './src/services/*',
          // 'src/stores/*': './src/stores/*',
          // 'src/themes/*': './src/themes/*',
          // 'src/utils/*': './src/utils/*',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
