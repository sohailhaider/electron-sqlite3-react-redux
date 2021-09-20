const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  externals: {
    // sqlite3: "commonjs sqlite3",
  },
  resolve: {
      extensions: [".ts", ".js", ".jsx"],
      fallback: {
        "child_process": false,
        // and also other packages that are not found
      }
    },
};
