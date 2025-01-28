const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  console.log("hello");
  res.send("hello");
});

app.listen(4000, async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/");
    console.log("data base is runing");
  } catch (error) {
    console.log(error);
  }
  console.log("server is runing");
});
