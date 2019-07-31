const Text = require('../model/textSchema');

const readText = async (id) => {
  let obj = { error: null, data: null };
  try {
    if (!id) throw 'Enter data';
    const textData = await Text.find({ _id: id }, result => result);
    obj.data = textData[0];
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const createText = async (data) => {
  let obj = { error: null, data: null };
  try {
    if (!data.heading || !data.paragraph) throw 'Enter data';
    const newuser = new Text(data);
    const result = await newuser.save();
    obj.data = result;
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const updateText = async (data) => {
  let obj = { error: null, data: null };
  try {
    if (!data.id) throw 'Enter data';
    const result = await Text.updateOne({ _id: data.id }, { $set: { heading: data.heading, paragraph: data.paragraph } });
    obj = await readText(data.id);
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const deleteText = async (data) => {
  let obj = { error: null, data: null };
  try {
    if (!data.id) throw 'Enter data';
    const result = await Text.remove({ _id: data.id });
    obj.data = result;
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
module.exports = {
  readText,
  createText,
  updateText,
  deleteText
}