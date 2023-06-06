module.exports = {
    plugins: [
      require('postcss-nested'),
      require('autoprefixer'),
      require('cssnano'),
      require('postcss-preset-env')({stage: 0})
    ],
  };