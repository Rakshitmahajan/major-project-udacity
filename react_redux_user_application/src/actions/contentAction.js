export const readConcept = (courseId, lessonId) => dispatch => {
  fetch(`http://localhost:5000/concept/${courseId}/${lessonId}`, {
    method: 'GET',
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(resData => {
      console.log(resData);
      if (resData.data !== null) {
        resData.data.concept.map(data => {
          fetch(`http://localhost:5000/${data.type}/${data.id}`)
            .then(res => res.json())
            .then(resp => {
              dispatch({
                type: "CONTENT",
                format: data.type,
                data: resp.data
              })
            });
          return data;
        })
      }
    })
}
