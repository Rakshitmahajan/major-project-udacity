const mongoose = require('mongoose');

const ConceptSchema = mongoose.Schema({
  conceptTitle: { type: String, default: '' },
  courseId: { type: String, default: '' },
  lessonId: { type: String, default: '' },
  concept: { type: Array }
});
module.exports = mongoose.model('Concept', ConceptSchema);