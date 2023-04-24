require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.post("/pay", async (req, res) => {
    try {
      const { name, cost } = req.body;
      //if (!name) return res.status(400).json({ message: "Please enter a name" });
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(cost * 100),
        currency: "usd",
        payment_method_types: ["card"],
        metadata: { name },
      });
      const clientSecret = paymentIntent.client_secret;
      res.json({ message: "Payment initiated", clientSecret });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});