export const readCourse = (userEmail) => dispatch => {
    console.log(userEmail);
    // fetch(`http://127.0.0.1:8000/userCourse/${userEmail}`)
    //   .then(res => res.json())
    //   .then(resData => {
    //     console.log(resData);
    //   })
    // fetch("http://10.10.5.192:8000/course/table")
    //     .then(res => res.json())
    //     .then(resData => {
    //         dispatch({
    //             type: "ALL_COURSE",
    //             courses: resData.data
    //         });
    //     });
    const data=[
        
        
        
        {
            "courseId": "CH4",
            "courseTitle": "course 4",
            "courseDescp": "desc",
            "courseType": "COURSE",
            "courseCategory": "git"
        },
        {
            "courseId": "CH5",
            "courseTitle": "git",
            "courseDescp": "desc",
            "courseType": "free",
            "courseCategory": "lwkbed"
        }
    ];
    dispatch({
        type: "ALL_COURSE",
        course: data
    });
};
  /*fetch(`http://10.10.5.192:8081/user/${userEmail}`)
    .then(res => res.json())
    .then(resData => {
      resData.data.map(data => {
        fetch(`http://10.10.5.192:8000/course/${data.courseId}`)
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
}*/

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
