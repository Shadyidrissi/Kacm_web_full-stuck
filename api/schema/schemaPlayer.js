const mongoose = require('mongoose')
const { Schema } = mongoose;


const player = new Schema({
  oldClubeImage: String,
  playerImage: String,
  namePlayer: String,
  details: String,
  age: { type: String, require: true }
});

const schemaPlayer = new mongoose.model("player", player)
module.export = schemaPlayer