const mongoose = require('mongoose')
const { Schema } = mongoose;


const poste = new Schema({
    text: String,
    image: String,
    video: String,
    date: { type: Date, default: Date.now },
    hidden: Boolean,
  });

const schemaPoste = new mongoose.model("poste", poste)
module.exports= schemaPoste