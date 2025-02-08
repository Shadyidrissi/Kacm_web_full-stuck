const mongoose = require('mongoose')
const { Schema } = mongoose;


const clubs = new Schema({
  name: { type: String },
  logo: { type: String },
  cupType: { type: String }
});

const schemaClub = new mongoose.model("Club", clubs)
module.exports = schemaClub