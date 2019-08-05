export const readCourse = (userEmail) => dispatch => {
  fetch(`http://localhost:8081/user/${userEmail}`)
    .then(res => res.json())
    .then(resData => {
      dispatch({
        type: 'CLEAR_COURSES'
      })
      resData.data.map(data => (
        fetch(`http://localhost:8000/course/${data.courseId}`)
          .then(res => res.json())
          .then(resData1 => {
            dispatch({
              type: "ALL_COURSE",
              course: resData1.data
            })
          })
      ))
    })
}
export const currentCourse = course => dispatch => {
  dispatch({
    type: "CURRENT_COURSE",
    course,
  })
}
export const clearCourse = () => dispatch => {
  dispatch({
    type: "CLEAR_COURSE"
  })
}