const mongoose = require('mongoose')
const { Schema } = mongoose;


const cups = new Schema({
  name: { type: String, require: true },
  logo: { type: String, require: true },
});

const schemaCup = new mongoose.model("Cup", cups)
module.exports = schemaCup