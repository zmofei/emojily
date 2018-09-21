const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'emojily.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'emojily'
  }
};
