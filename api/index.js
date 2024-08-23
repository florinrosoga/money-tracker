const express = require("express");
const app = express();

// Define a route to handle GET requests to /api/test
app.get("/api/test", (req, res) => {
  res.json({message: "it works"}); // Updated message
});

// Define the port the server will listen on
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
