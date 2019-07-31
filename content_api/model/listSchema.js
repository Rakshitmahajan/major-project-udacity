const mongoose = require('mongoose');

const ListSchema = mongoose.Schema({
  heading: { type: String, default: '' },
  list: { type: Array }
});
module.exports = mongoose.model('List', ListSchema);