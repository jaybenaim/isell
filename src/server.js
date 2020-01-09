const app = require("express")();
const express = require(express);
const cors = require("cors");
const stripe = require("stripe")("sk_test_VoxUvHXLeE6bdU8xwIsPkX8r00Ab8SeHDH");

app.use(require("body-parser").text());

const whitelist = [
  "https://jaybenaim.github.io",
  "localhost:3000",
  "127.0.0.1"
];
// const corsOptions = {
//   origin: function(origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   }
// };
var corsOptions = {
  origin: "https://jaybenaim.github.io",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

var corsOptionsDelegate = function(req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.options("*", cors());
app.post("/charge", async (req, res) => {
  try {
    const data = JSON.parse(req.body);
    let { token, subTotal } = data;
    subTotal = Math.floor(subTotal * 100);
    let { status } = await stripe.charges.create({
      amount: subTotal,
      currency: "cad",
      description: "An example charge",
      source: token
    });

    res.json({ status });
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});
app.listen(9000, () => console.log("Listening on port 9000"));
