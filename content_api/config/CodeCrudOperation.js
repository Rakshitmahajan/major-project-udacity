const Code = require('../model/codeSchema');

const readCode = async (id) => {
  let obj = { error: null, data: null };
  try {
    if (!id) throw 'Enter data';
    const codeData = await Code.find({ _id: id }, result => result);
    obj.data = codeData[0];
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const createCode = async (data) => {
  let obj = { error: null, data: null };
  try {
    if (!data.code) throw 'Enter data';
    const newuser = new Code(data);
    const result = await newuser.save();
    obj.data = result;
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const updateCode = async (data) => {
  let obj = { error: null, data: null };
  try {
    if (!data.code || !data.id) throw 'Enter data';
    const result = await Code.updateOne({ _id: data.id }, { $set: { code: data.code } });
    obj = await readCode(data.id);
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const deleteCode = async (data) => {
  let obj = { error: null, data: null };
  try {
    if (!data.id) throw 'Enter data';
    const result = await Code.remove({ _id: data.id });
    obj.data = result;
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
module.exports = {
  readCode,
  createCode,
  updateCode,
  deleteCode
}