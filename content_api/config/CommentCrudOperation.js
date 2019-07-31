const Comment = require('../model/commentSchema');

const readComment = async (id) => {
  let obj = { error: null, data: null };
  try {
    if (!id) throw 'Enter data';
    const commentData = await Comment.find({ _id: id }, result => result);
    obj.data = commentData[0];
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const createComment = async (data) => {
  let obj = { error: null, data: null };
  try {
    if (!data.comment) throw 'Enter data';
    const newuser = new Comment(data);
    const result = await newuser.save();
    obj.data = result;
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const updateComment = async (data) => {
  let obj = { error: null, data: null };
  try {
    if (!data.comment || !data.id) throw 'Enter data';
    const result = await Comment.updateOne({ _id: data.id }, { $set: { comment: data.comment } });
    obj = await readComment(data.id);
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const deleteComment = async (data) => {
  let obj = { error: null, data: null };
  try {
    if (!data.id) throw 'Enter data';
    const result = await Comment.remove({ _id: data.id });
    obj.data = result;
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
module.exports = {
  readComment,
  createComment,
  updateComment,
  deleteComment
}