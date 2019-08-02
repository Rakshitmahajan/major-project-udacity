export const readCourse = (userEmail) => dispatch => {
  fetch(`http://localhost:8081/user/${userEmail}`)
    .then(res => res.json())
    .then(resData => {
      resData.data.map(data => {
        fetch(`http://localhost:8000/course/${data.courseId}`)
          .then(res => res.json())
          .then(resData1 => {
            dispatch({
              type: "ALL_COURSE",
              course: resData1.data
            })
          })
        return data;
      })
    })
}

// fetch("http://127.0.0.1:8000/course/table")
//   .then(res => res.json())
//   .then(resData => {
//     let freeCourse = [];
//     let nanodegreeCourse = resData.data.filter(data => {
//       if (data.courseType === 'COURSE') {
//         freeCourse.push(data);
//       } else return data;
//     })
//     dispatch({
//       type: "ALL_COURSE",
//       freeCourse,
//       nanodegreeCourse
//     })
//   })