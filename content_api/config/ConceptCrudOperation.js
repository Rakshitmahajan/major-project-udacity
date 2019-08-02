const Concept = require('../model/conceptSchema');

const readConcept = async (data) => {
  let obj = { error: null, data: null };
  try {
    if (!data.id) throw 'Enter data';
    const conceptData = await Concept.find({ _id: data.id }, result => result);
    obj.data = conceptData[0];
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const readConceptTitle = async (courseId, lessonId) => {
  let obj = { error: null, data: null };
  try {
    if (!courseId || !lessonId) throw 'Enter data';
    const conceptData = await Concept.find({ courseId: courseId, lessonId: lessonId }, { conceptTitle: 1, courseId: 1, lessonId: 1, _id: 0 }, result => result);
    obj.data = conceptData;
  } catch (err) {
    obj.error = err;
  }
  return obj;
}

const readConceptData = async (courseId, lessonId, conceptTitle) => {
  let obj = { error: null, data: null };
  try {
    if (!courseId || !lessonId) throw 'Enter data';
    const conceptData = await Concept.find({ courseId: courseId, lessonId: lessonId, conceptTitle: conceptTitle }, result => result);
    if (conceptData.length > 0) {
      obj.data = conceptData[0];
    }
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const createConcept = async (data) => {
  let obj = { error: null, data: null };
  try {
    if (!data.courseId || !data.lessonId || !data.conceptTitle) throw 'Enter data';
    const newuser = new Concept(data);
    const result = await newuser.save();
    obj.data = result;
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const updateConcept = async (data) => {
  let obj = { error: null, data: null };
  try {
    if (!data.id) throw 'Enter data';
    const result = await Concept.updateOne({ _id: data.id }, { $set: { concept: data.Concept } });
    obj = await readConcept(data);
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
const deleteConcept = async (data) => {
  let obj = { error: null, data: null };
  try {
    if (!data.id) throw 'Enter data';
    const result = await Concept.remove({ _id: data.id });
    obj.data = result;
  } catch (err) {
    obj.error = err;
  }
  return obj;
}
module.exports = {
  readConcept,
  readConceptData,
  readConceptTitle,
  createConcept,
  updateConcept,
  deleteConcept
}