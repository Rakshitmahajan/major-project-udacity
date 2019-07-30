export const readLesson = (courseId) => dispatch => {
    // fetch(`http://10.10.5.192:3031/lesson/table/${courseId}`)
    //   .then(res => res.json())
    //   .then(resData => {
    //     dispatch({
    //       type: "ALL_LESSON",
    //       lessons: resData.data
    //     })
    //   })
    const data=[
        {
            "lessonId": "l1",
            "lessonNumber": 1,
            "lessonTitle": "Lesson 1 Git",
            "lessonDescp": "description",
            "lessonImage": "lesson image",
            "courseId": "CH1"
        },
        {
            "lessonId": "l2",
            "lessonNumber": 2,
            "lessonTitle": "Lesson 2 Git data",
            "lessonDescp": "git data description",
            "lessonImage": "lesson image",
            "courseId": "CH1"
        },
        {
            "lessonId": "l3",
            "lessonNumber": 3,
            "lessonTitle": "Lesson 2 Git merge",
            "lessonDescp": "git data description",
            "lessonImage": "lesson image",
            "courseId": "CH1"
        }
    ];
    dispatch({
  /*fetch(`http://10.10.5.192:3031/lesson/table/${courseId}`)
    .then(res => res.json())
    .then(resData => {
      dispatch({*/
        type: "ALL_LESSON",
        lessons: data
    });
};