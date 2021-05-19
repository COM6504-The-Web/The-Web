// Require Mongoose
const mongoose = require('../databases/database');
const Schema = mongoose.Schema;

const imgTextSchema = new Schema({
    id: String,
    x: Number,
    y: Number,
    text: String
  })

const imgTextModel = mongoose.model('imgText', imgTextSchema);

module.exports = imgTextModel