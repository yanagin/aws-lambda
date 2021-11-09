const path = require('path');

module.exports = {
	  mode : 'production',
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
