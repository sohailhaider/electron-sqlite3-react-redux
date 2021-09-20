module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: "./src/main.js",
  // Put your normal webpack config below here
  module: {
    rules: require("./webpack.rules"),
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
