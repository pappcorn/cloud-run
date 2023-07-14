import express from "express";
const app = express();
const port = process.env.PORT || 3000;

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, World! 22");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
