const express = require("express");
const mongoose = require("mongoose");
const app = express();


//! API Admin
app.get("/", (req, res) => {
  console.log("hello");
  res.send("hello");
});

//! API Clubs Cups






app.listen(4000, async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/kacm");
    console.log("data base is runing");
  } catch (error) {
    console.log(error);
  }
  console.log("server is runing");
});