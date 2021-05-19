// Require Mongoose
const mongoose = require('../databases/database');
const Schema = mongoose.Schema;

const imgSchema = new Schema({
    id: String,
    content: String,
    user: String
  })

const imgModel = mongoose.model('img', imgSchema);

module.exports = imgModel