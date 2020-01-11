const express = require("express");
const app = express();
const path = require("path");
const stripe = require("stripe")("sk_test_VoxUvHXLeE6bdU8xwIsPkX8r00Ab8SeHDH");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

app.use(morgan("tiny"));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  res.send("HOME");
});

app.get("/api/charge", async (req, res) => {
  res.send("API HOME");
});

var whitelist = ["https://jaybenaim.github.io", "http://localhost:3000"];
var corsOptionsDelegate = function(req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};
app.post("/api/charge", cors(corsOptionsDelegate), async (req, res, next) => {
  try {
    // const data = JSON.parse(req.body);
    const data = JSON.parse(req.headers.data);
    console.log(data);
    let { token, subTotal } = data;
    subTotal = Math.floor(subTotal * 100);
    let { status } = await stripe.charges.create({
      amount: subTotal,
      currency: "cad",
      description: "An example charge",
      source: token
    });

    res.json({ status });
    console.log(status);
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});
app.listen(9000, () => console.log("Listening on port 9000"));
