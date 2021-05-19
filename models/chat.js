// Require Mongoose
const mongoose = require('../databases/database');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    id: String,
    user: String,
    time: Date,
    text: String
  })

const chatModel = mongoose.model('chat', chatSchema);

module.exports = chatModel