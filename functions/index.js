/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  // eslint-disable-next-line indent
  "sk_test_51Laz4GSEeYNYCOcM1OA2Yaj6vDuUAFzAQHg60sXDq2qcbcww9A93fzQ2JhMyWSxNXqdwJQiXSmUx80J8JxGN0wB400u9HZm7r7"
);

// - API

// - App config
const app = express();

// - Middlewares
// eslint-disable-next-line object-curly-spacing
app.use(cors({ origin: true }));
app.use(express.json());

// - API routrs
app.get("/", (req, res) => res.status(200).send("Hello World!"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("THE TOTAL IS >>>>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-a030c/us-central1/api
