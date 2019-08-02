export const readAllConcept = (courseId, lessonId) => dispatch => {
  fetch(`http://localhost:5000/concept/title/${courseId}/${lessonId}`, {
    method: 'GET',
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(resData => {
      resData.data.map(data => {
        dispatch({
          type: "CONTENT_TITLE",
          data
        })
        return data;
      })
    })
}