const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Cineverse Backend Berjalan!");
});

app.get("/api", (req, res) => {
  res.json({
    status: "success",
    message: "Cineverse Backend Berjalan!"
  });
});

module.exports = app;
