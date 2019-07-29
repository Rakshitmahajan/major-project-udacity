export const readCourse = (userEmail) => dispatch => {
  console.log(userEmail);
  // fetch(`http://127.0.0.1:8000/userCourse/${userEmail}`)
  //   .then(res => res.json())
  //   .then(resData => {
  //     console.log(resData);
  //   })
  fetch("http://127.0.0.1:8000/course/table")
    .then(res => res.json())
    .then(resData => {
      dispatch({
        type: "ALL_COURSE",
        courses: resData.data
      })
    })
}