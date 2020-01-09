const app = require("express")();
const express = require(express);
const cors = require("cors");
const stripe = require("stripe")("sk_test_VoxUvHXLeE6bdU8xwIsPkX8r00Ab8SeHDH");

app.use(require("body-parser").text());

const whitelist = [
  "https://jaybenaim.github.io/isell/",
  "localhost",
  "127.0.0.1"
];
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};
app.post("/charge", cors(corsOptions), async (req, res) => {
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
