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
            "courseId": "",
            "courseTitle": "",
            "courseDescp": "",
            "courseType": "",
            "courseCategory": ""
        },
        {
            "courseId": "CH1",
            "courseTitle": "Course 1",
            "courseDescp": "descp about GIT",
            "courseType": "free",
            "courseCategory": "AI"
        },
        {
            "courseId": "CH2",
            "courseTitle": "Course 2",
            "courseDescp": "descp",
            "courseType": "free",
            "courseCategory": "AI"
        },
        {
            "courseId": "CH3",
            "courseTitle": "Course 3",
            "courseDescp": "descp about GIT",
            "courseType": "Course",
            "courseCategory": "Java"
        },
        {
            "courseId": "CH4",
            "courseTitle": "course 4",
            "courseDescp": "desc",
            "courseType": "free",
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
        courses: data
    });
};