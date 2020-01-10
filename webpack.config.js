const path = require("path");
const options = {
  protocol: window.location.protocol === "https:" ? "WSS" : "WSS"
};
module.exports = {
  devtool: false,
  plugins: [new webpack.EvalSourceMapDevToolPlugin(options)]
};
