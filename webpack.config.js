const config = {
  mode: 'production',
  entry: {
    index: './src/js/index.js',
    frequent: './src/js/frequent.js',
    testiq: './src/js/testiq.js',
    validateparenthesis: './src/js/validateparenthesis.js',
    rushhourinoffice: './src/js/rushhourinoffice.js',
    binarysearch: './src/js/binarysearch.js',
    searchscore: './src/js/searchscore.js',
    flatarray: './src/js/flatarray.js',
    fibonacci: './src/js/fibonacci.js',
    binarysearchincludes: './src/js/binarysearchincludes.js',
  },
  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

module.exports = config;
