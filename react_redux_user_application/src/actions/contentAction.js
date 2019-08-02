export const readConcept = (courseId, lessonId, conceptTitle) => dispatch => {
  console.log(courseId, lessonId, conceptTitle);
  fetch(`http://10.10.5.192:5000/concept/${courseId}/${lessonId}/${conceptTitle}`, {
    method: 'GET',
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(resData => {
      console.log('fetch', resData);
      if (resData.data !== null) {
        console.log(resData)
        resData.data.concept.map((data, key) => {
          if (data.type === 'image' || data.type === 'video') {
            dispatch({
              type: "CONTENT",
              format: data.type,
              key,
              data: data
            })
          } else fetch(`http://10.10.5.192:5000/${data.type}/${data.id}`)
            .then(res => res.json())
            .then(resp => {
              console.log(data.type, data.id)
              dispatch({
                type: "CONTENT",
                format: data.type,
                key,
                data: resp.data
              })
            });
          return data;
        })
      }
    })
}
