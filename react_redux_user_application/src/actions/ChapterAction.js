export const readChapters = (courseId, lessonId) => dispatch => {
  fetch(`http://10.10.5.192:5000/concept/title/${courseId}/${lessonId}`, {
    method: 'GET',
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(resData => {
      dispatch({
        type: "ALL_CHAPTER",
        chapters: resData.data
      })
    })
}
export const currentChapter = (courseId, lessonId, chapterTitle) => dispatch => {
  // console.log('currentChapter', courseId, lessonId, chapterTitle)
  fetch(`http://10.10.5.192:5000/concept/${courseId}/${lessonId}/${chapterTitle}`, {
    method: 'GET',
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(resData => {
      dispatch({
        type: "CURRENT_CHAPTER",
        chapter: resData.data
      })
    })
}
export const clearChapter = () => dispatch => {
  dispatch({
    type: "CLEAR_CHAPTER"
  })
}