const Quiz = require('../model/quizSchema');

const readQuiz = async (id) => {
  let obj = { error: null, data: null };
  try {
    if (!id) throw 'Enter data';
    const quizData = await Quiz.find({ _id: id }, result => result);
    obj.data = quizData[0];
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const createQuiz = async (data) => {
  let obj = { error: null, data: null };
  try {
    if (!data.question || !data.answer) throw 'Enter data';
    let newuser = new Quiz(data);
    const result = await newuser.save();
    obj.data = result;
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const updateQuiz = async (data) => {
  let obj = { error: null, data: null };
  try {
    if (!data.id) throw 'Enter data';
    const result = await Quiz.updateOne({ _id: data.id }, { $set: { Quiz: data.Quiz } });
    obj = await readQuiz(data.id);
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const deleteQuiz = async (data) => {
  let obj = { error: null, data: null };
  try {
    if (!data.id) throw 'Enter data';
    const result = await Quiz.remove({ _id: data.id });
    obj.data = result;
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
module.exports = {
  readQuiz,
  createQuiz,
  updateQuiz,
  deleteQuiz
}