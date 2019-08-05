const User = require('../model/userSchema');

const readUser = async (email) => {
  let obj = { error: null, data: null };
  try {
    if (!email) throw 'Enter data';
    const codeData = await User.find({ email: email }, result => result);
    if (!codeData[0]) throw ('Create Account')
    obj.data = codeData[0];
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const createUser = async (data) => {
  let obj = { error: null, data: null };
  try {
    if (!data.email) throw 'Enter data';
    const newuser = new User(data);
    const result = await newuser.save();
    obj.data = result;
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const updateUpVotesReceived = async (data) => {
  let obj = { error: null, data: null };
  try {
    if (!data.email || !data.upvotesReceived) throw 'Enter data';
    const user1 = await readUser(data.email);
    const upvotesReceived = user1.data.upvotesReceived + data.upvotesReceived;
    const result = await User.updateOne({ email: data.email }, { $set: { upvotesReceived: upvotesReceived } });
    obj = await readUser(data.email);
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const updateUpVotesGiven = async (data) => {
  let obj = { error: null, data: null };
  try {
    if (!data.email || !data.upvotesGiven) throw 'Enter data';
    const user1 = await readUser(data.email);
    const upvotesGiven = user1.data.upvotesGiven + data.upvotesGiven;
    const result = await User.updateOne({ email: data.email }, { $set: { upvotesGiven: upvotesGiven } });
    obj = await readUser(data.email);
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const updateAnswerPost = async (data) => {
  let obj = { error: null, data: null };
  try {
    if (!data.email || !data.answerPost) throw 'Enter data';
    const user1 = await readUser(data.email);
    const answerPost = user1.data.answerPost + data.answerPost;
    const result = await User.updateOne({ email: data.email }, { $set: { answerPost: answerPost } });
    obj = await readUser(data.email);
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const updateAnswerAccepted = async (data) => {
  let obj = { error: null, data: null };
  try {
    if (!data.email || !data.answerAccepted) throw 'Enter data';
    const user1 = await readUser(data.email);
    const answerAccepted = user1.data.answerAccepted + data.answerAccepted;
    const result = await User.updateOne({ email: data.email }, { $set: { answerAccepted: answerAccepted } });
    obj = await readUser(data.email);
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const deleteUser = async (email) => {
  let obj = { error: null, data: null };
  try {
    if (!data.id) throw 'Enter data';
    const result = await User.remove({ email: email });
    obj.data = result;
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
module.exports = {
  readUser,
  createUser,
  updateUpVotesReceived,
  updateUpVotesGiven,
  updateAnswerPost,
  updateAnswerAccepted,
  deleteUser

}