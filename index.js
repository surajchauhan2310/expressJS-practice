const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Request sent by", req.query.name);
  res.send("hello, this is a Home page of" + req.query.name);
});

app.get("/about", (req, res) => {
  res.send("hello, this is a About us page");
});

app.get("/help", (req, res) => {
  res.send("hey! its a Help page");
});
const PORT = 8000;

app.listen(PORT, () => {
  console.log("listening at", PORT);
});
