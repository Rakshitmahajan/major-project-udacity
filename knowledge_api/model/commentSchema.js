const mongoose = require('mongoose');

const schema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  answer: [{ type: mongoose.Schema.Types.ObjectId, ref: 'answer' }],
  content: { type: String, default: '' },
  upvotes: { type: Number, default: 0 }
});
module.exports = mongoose.model('comment', schema);