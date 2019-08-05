export const readLesson = (courseId) => dispatch => {
  fetch(`http://192.168.43.255:3031/lesson/table/${courseId}`)
    .then(res => res.json())
    .then(resData => {
      dispatch({
        type: "ALL_LESSON",
        lesson: resData.data
      })
    })
}
export const currentLesson = (lesson) => dispatch => {
  // console.log('currentLesson', lesson)
  dispatch({
    type: "CURRENT_LESSON",
    lesson
  })
}
export const clearLesson = () => dispatch => {
  dispatch({
    type: "CLEAR_LESSON"
  })
}