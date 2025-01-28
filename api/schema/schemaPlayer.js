import mongoose from 'mongoose';
const { Schema } = mongoose;


const player = new Schema({
    oldClubeImage: String,
    playerImage: String,
    namePlayer: String,
    details: String,
  });

const schemaPlayer = new mongoose.model("player", player)
module.export= schemaPlayer