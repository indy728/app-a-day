const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  dateString: { type: String },
  dateNumber: { type: String },
  content: { type: String },
});

mongoose.model('card', CardSchema);