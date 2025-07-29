require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Hello from Express!</h1>
    <p>NODE_ENV: ${process.env.NODE_ENV}</p>
    <p>API_URL: ${process.env.API_URL}</p>
  `);
});

app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
  console.log("🌐 API:", process.env.API_URL);
});