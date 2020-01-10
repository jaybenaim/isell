const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(proxy("/*", { target: "https://isell-development.herokuapp.com" }));
};
