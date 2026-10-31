const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("LolokCinema Backend Berjalan!");
});

module.exports = app;
