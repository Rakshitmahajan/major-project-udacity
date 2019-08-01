export const readLesson = (courseId) => dispatch => {
  fetch(`http://10.10.5.192:3031/lesson/table/${courseId}`)
    .then(res => res.json())
    .then(resData => {
      dispatch({
        type: "ALL_LESSON",
        lessons: resData.data
      })
    })
}