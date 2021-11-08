module.exports = {
	  mode : 'development',
    target: 'node',
    entry: {
      app: './app.js'
    },
    output: {
      filename: '[name].js',
      libraryTarget: 'commonjs2',
    }
  };
