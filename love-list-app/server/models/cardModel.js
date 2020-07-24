const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  date: { type: String },
  content: { type: String },
});

mongoose.model('card', CardSchema);