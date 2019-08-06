const mongoose = require('mongoose');

const schema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  comment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user', }],
  answer: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
  question: { type: String, default: '' },
  detail: { type: String, default: '' },
  category: { type: String, default: '' },
  project: { type: String, default: '' },
  upvotes: { type: Number, default: 0 }
});
module.exports = mongoose.model('post', schema);