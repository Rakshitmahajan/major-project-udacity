export const readLesson = (courseId) => dispatch => {
  fetch(`http://localhost:3031/lesson/table/${courseId}`)
    .then(res => res.json())
    .then(resData => {
      dispatch({
        type: "ALL_LESSON",
        lessons: resData.data
      })
    })
}