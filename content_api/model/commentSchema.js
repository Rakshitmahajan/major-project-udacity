const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
  comment: { type: String, default: '' }
})
module.exports = mongoose.model('Comment', CommentSchema);