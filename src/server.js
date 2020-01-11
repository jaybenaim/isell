const express = require("express");
const app = express();
const path = require("path");
const stripe = require("stripe")("sk_test_VoxUvHXLeE6bdU8xwIsPkX8r00Ab8SeHDH");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.options("*", cors());
const whitelist = [
  "https://jaybenaim.github.io",
  "https://jaybenaim.github.io/isell/",
  "http://localhost:3000/isell/ShoppingCart",
  "http://localhost:3000",
  "localhost:3000",
  "127.0.0.1"
];
const corsOptions = {
  origin: "https://jaybenaim.github.io",
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "x-Trigger",
    "Access-Control-Allow-Headers"
  ],
  credentials: true
};
var corsOptionsDelegate = function(req, callback) {
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(
  express.static(path.join(__dirname.replace("http", "https"), "../build"))
);
app.get("/", function(req, res) {
  res.sendFile(
    path.join(__dirname.replace("http", "https"), "../build", "index.html")
  );
});

app.get("/api", async (req, res) => {
  res.send("API HOME");
});

app.post("/api/charge", cors(), async (req, res, next) => {
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
