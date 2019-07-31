const mongoose = require('mongoose');
const QuizSchema = mongoose.Schema({
  question: { type: String, default: '' },
  answer: { type: String, default: '' },
  option1: { type: String, default: '' },
  option2: { type: String, default: '' },
  option3: { type: String, default: '' },
  option4: { type: String, default: '' }
})
module.exports = mongoose.model('Quiz', QuizSchema);