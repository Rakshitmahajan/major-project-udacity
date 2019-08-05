const mongoose = require('mongoose');

const schema = mongoose.Schema({
  email: { type: String, default: '' },
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  upvotesReceived: { type: Number, default: 0 },
  upvotesGiven: { type: Number, default: 0 },
  answerPost: { type: Number, default: 0 },
  answerAccepted: { type: Number, }
});
module.exports = mongoose.model('user', schema);