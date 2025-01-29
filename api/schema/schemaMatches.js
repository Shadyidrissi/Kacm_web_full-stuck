import mongoose from 'mongoose';
const { Schema } = mongoose;


const matches = new Schema({
  clubName: { type: String, require: true },
  clubeLogo: { type: String, require: true },
  stadium: { type: String, require: true },
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  cupType: { type: String, require: true },
});

const schemaMatches = new mongoose.model("Matches", matches)
module.export = schemaMatches