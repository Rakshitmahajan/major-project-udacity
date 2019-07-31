const List = require('../model/listSchema');

const readList = async (id) => {
  let obj = { error: null, data: null };
  try {
    if (!data.id) throw 'Enter data';
    const listData = await await List.findOne({ _id: id }, result => result);
    obj.data = listData[0];
  } catch (err) {
    obj.error = err;
  }
  return obj;
}

module.exports = {
  readList
}