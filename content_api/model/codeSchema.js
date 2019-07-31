const mongoose = require('mongoose');

const CodeSchema = mongoose.Schema({
  code: { type: String, default: '' }
});
module.exports = mongoose.model('Code', CodeSchema);