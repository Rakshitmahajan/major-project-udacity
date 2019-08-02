export const readAllConcept = (courseId, lessonId) => dispatch => {
  fetch(`http://10.10.5.192:5000/concept/title/${courseId}/${lessonId}`, {
    method: 'GET',
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(resData => {
      if (resData.data.length > 0) {
        resData.data.map(data => {
          dispatch({
            type: "CONTENT_TITLE",
            error: 0,
            data
          })
          return data;
        })
      } else {
        dispatch({
          type: "CONTENT_TITLE",
          error: 1,
          data: []
        })
        console.log('error');
      }

    })
}