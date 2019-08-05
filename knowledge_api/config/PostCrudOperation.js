const Post = require('../model/postSchema');

const readPost = async () => {
  let obj = { error: null, data: null };
  try {
    const codeData = await Post.find({}, result => result).populate('user');
    obj.data = codeData;
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const readMyPost = async (id) => {
  let obj = { error: null, data: null };
  try {
    const codeData = await Post.find({}, result => result);
    let data = [];
    data = codeData.filter(data => id == data.user);
    if (!codeData[0]) throw ('Create Post')
    obj.data = data;
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const readPostDetail = async (id) => {
  let obj = { error: null, data: null };
  try {
    if (!id) throw 'Enter data';
    const codeData = await Post.find({ _id: id }, result => result).populate('user').populate('answer');
    if (!codeData[0]) throw ('Create Post')
    obj.data = codeData[0];
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const createPost = async (data) => {
  let obj = { error: null, data: null };
  try {
    // if (!data.email) throw 'Enter data';
    const newuser = new Post(data);
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
    const result = await Post.updateOne({ _id: data.id }, { $set: { upvotes: data.upvotes } });
    obj = await readPostDetail(data.id);
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const addAnswer = async (data) => {
  let obj = { error: null, data: null };
  try {
    if (!data.postId || !data.answerId) throw 'Enter data';
    const result = await Post.updateOne({ _id: data.postId }, { $push: { answer: data.answerId } });
    let obj1 = await readPostDetail(data.postId);
    obj.data = obj1.data;
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
module.exports = {
  readPost,
  readMyPost,
  readPostDetail,
  createPost,
  updateUpvotes,
  addAnswer
}