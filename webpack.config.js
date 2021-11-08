const path = require('path');

module.exports = {
	  mode : 'development',
    target: 'node',
    entry: {
      app: './src/app.js'
    },
    output: {
      path : path.join(__dirname, 'sam-app/hello-world'),
      filename: '[name].js',
      libraryTarget: 'commonjs2',
    }
  };
