export const readConcept = (courseId, lessonId, conceptTitle) => dispatch => {
  console.log('content ', courseId, lessonId, conceptTitle);
  fetch(`http://10.10.5.192:5000/concept/${courseId}/${lessonId}/${conceptTitle}`, {
    method: 'GET',
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(resData => {
      if (resData.data !== null) {
        resData.data.concept.map(data => {
          fetch(`http://10.10.5.192:5000/${data.type}/${data.id}`)
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
