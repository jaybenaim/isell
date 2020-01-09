const express = require("express");
const app = express();
const path = require("path");
// const cors = require("cors");
const stripe = require("stripe")("sk_test_VoxUvHXLeE6bdU8xwIsPkX8r00Ab8SeHDH");

app.use(require("body-parser").text());
app.use(
  express.static("/Users/jay/projects/ecommerce/isell/isell/build/index.html")
);
const whitelist = [
  "https://jaybenaim.github.io",
  "https://jaybenaim.github.io/isell/",
  "http://localhost:3000",
  "localhost:3000",
  "127.0.0.1"
];
// app.use(cors());
app.get("/", (req, res) => {
  res.sendFile("/Users/jay/projects/ecommerce/isell/isell/build/index.html");
});

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