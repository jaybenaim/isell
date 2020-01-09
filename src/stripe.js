const stripe = require("stripe")("sk_test_VoxUvHXLeE6bdU8xwIsPkX8r00Ab8SeHDH");

async function postCharge(req, res) {
  try {
    const { amount, source, receipt_email } = req.body;

    const charge = await stripe.charges.create({
      amount,
      currency: "cad",
      source,
      receipt_email: "benaimjacob@gmail.com"
    });

    if (!charge) throw new Error("charge unsuccessful");

    res.status(200).json({
      message: "charge posted successfully",
      charge
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

module.exports = postCharge;
