const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Define a route to handle GET requests to /api/test
app.get("/api/test", (req, res) => {
  res.json({message: "it works"}); // Updated message
});

app.post("/api/transaction", (req, res) => {
  res.json(req.body);
});

// Define the port the server will listen on
const port = 4040;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
