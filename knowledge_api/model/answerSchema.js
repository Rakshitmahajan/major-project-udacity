const mongoose = require('mongoose');

const schema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'post' },
  detail: { type: String, default: '' },
  upvotes: { type: Number, default: 0 },
  time: { type: Date, default: 0 }
});
module.exports = mongoose.model('answer', schema);