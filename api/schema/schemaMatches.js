import mongoose from 'mongoose';
const { Schema } = mongoose;


const matches = new Schema({
    clubName: String,
    clubeLogo: String,
    stadium: String,
    date: String,
    hidden: Boolean,
    
  });

const schemaMatches = new mongoose.model("Matches", matches)
module.export= schemaMatches