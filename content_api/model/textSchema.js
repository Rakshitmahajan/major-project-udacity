const mongoose = require('mongoose');
const TextSchema = mongoose.Schema({
  heading: { type: String, default: '' },
  paragraph: { type: String, default: '' }
})

module.exports = mongoose.model('Text', TextSchema);