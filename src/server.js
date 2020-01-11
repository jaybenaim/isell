const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const stripe = require("stripe")("sk_test_VoxUvHXLeE6bdU8xwIsPkX8r00Ab8SeHDH");
const bodyParser = require("body-parser");
// app.use(
//   express.static("/Users/jay/projects/ecommerce/isell/isell/build/index.html")
// );
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.all("/*", function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });

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
// app.use(cors());
var corsOptionsDelegate = function(req, callback) {
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

// app.get("/", (req, res) => {
//   res.sendFile("/Users/jay/projects/ecommerce/isell/isell/build/index.html");
// });
// app.get("/", (req, res) => {
//   res.write("<h1>Home</h1>");
// });

// app.use(express.static(path.join(__dirname, "build")));
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(
  express.static(path.join(__dirname.replace("http", "https"), "../build"))
);
app.get("/", function(req, res) {
  res.sendFile(
    path.join(__dirname.replace("http", "https"), "../build", "index.html")
  );
});
// -app.get("/", function(req, res) {
//   +app.get("/*", function(req, res) {
//     res.sendFile(path.join(__dirname, "build", "index.html"));
//   });
// });
app.get("/api", async (req, res) => {
  res.send("API HOME");
});

app.options("/api/charge", cors(corsOptionsDelegate));
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
