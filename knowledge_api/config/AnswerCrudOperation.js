const Answer = require('../model/answerSchema');

const readAnswer = async () => {
  let obj = { error: null, data: null };
  try {
    const codeData = await Answer.find({}, result => result).populate('user');
    obj.data = codeData;
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const readOneAnswer = async (id) => {
  let obj = { error: null, data: null };
  try {
    const codeData = await Answer.find({ _id: id }, result => result);
    obj.data = codeData;
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const readMyAnswer = async (id) => {
  let obj = { error: null, data: null };
  try {
    const codeData = await Answer.find({}, result => result).populate('comment');
    let data = [];
    data = codeData.filter(data => id == data.user);
    if (!codeData[0]) throw ('Create Answer')
    obj.data = data;
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const readAnswerDetail = async (id) => {
  let obj = { error: null, data: null };
  try {
    if (!id) throw 'Enter data';
    const codeData = await Answer.find({ _id: id }, result => result).populate('user').populate('comment');
    if (!codeData[0]) throw ('Create Answer')
    obj.data = codeData[0];
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const createAnswer = async (data) => {
  let obj = { error: null, data: null };
  try {
    // if (!data.email) throw 'Enter data';
    const newuser = new Answer(data);
    const result = await newuser.save();
    obj.data = result;
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const updateUpvotes = async (data) => {
  let obj = { error: null, data: null };
  try {
    if (!data.id) throw 'Enter data';
    const user1 = await readOneAnswer(data.id);
    const upvotes = user1.data[0].upvotes + data.upvotes;
    const result = await Answer.updateOne({ _id: data.id }, { $set: { upvotes: upvotes } });
    obj = await readAnswerDetail(data.id);
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
module.exports = {
  readAnswer,
  readMyAnswer,
  readAnswerDetail,
  createAnswer,
  updateUpvotes
}