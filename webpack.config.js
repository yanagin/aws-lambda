const path = require('path');

module.exports = {
	  mode : 'production',
    target: 'node',
    entry: {
      app: './src/app.js',
      function1: './src/function1.js',
      function2: './src/function2.js'
    },
    output: {
      path : path.join(__dirname, 'sam-app/hello-world'),
      filename: '[name].js',
      libraryTarget: 'commonjs2',
    }
  };
