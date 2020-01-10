const path = require("path");
const options = {
  protocol: window.location.protocol === "https:" ? "wss" : "ws"
};
module.exports = {
  devtool: false,
  plugins: [new webpack.EvalSourceMapDevToolPlugin(options)]
};
