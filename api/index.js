const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const Transaction = require("./models/Transaction.js");
const {default: mongoose} = require("mongoose");

app.use(cors());
app.use(express.json());

// Define a route to handle GET requests to /api/test
app.get("/api/test", (req, res) => {
  res.json({message: "it works"}); // Updated message
});

app.post("/api/transaction", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const {name, price, description, datetime} = req.body;
  const transaction = await Transaction.create({
    name,
    price,
    description,
    datetime,
  });
  res.json(transaction);
});

app.get("/api/transactions", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const transactions = await Transaction.find();
  res.json(transactions);
});

// Define the port the server will listen on
const port = 4040;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
