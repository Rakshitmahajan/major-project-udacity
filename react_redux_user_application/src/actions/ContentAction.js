export const readConcept = (courseId, lessonId, conceptTitle) => dispatch => {
  fetch(`http://localhost:5000/concept/${courseId}/${lessonId}/${conceptTitle}`, {
    method: 'GET',
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(resData => {
      if (resData.data !== null) {
        dispatch({
          type: "CLEAR_CONTENT",
        })
        Promise.all(
          resData.data.concept.map((data, key) => {
            if (data.type === "video") {
              dispatch({
                type: "ALL_CONTENT",
                data: data
              })
            } else if (data.type === "image") {
              fetch(`http://192.168.43.50/24:5400/readimage/${data.url}`)
                .then(res => res.json())
                .then(resp => {
                  dispatch({
                    type: "ALL_CONTENT",
                    data: { type: data.type, data: resp }
                  })
                })
            } else {
              fetch(`http://localhost:5000/${data.type}/${data.id}`)
                .then(res => res.json())
                .then(resp => {
                  dispatch({
                    type: "ALL_CONTENT",
                    data: { type: data.type, data: resp.data }
                  })
                });

            }
            return data;
          }
          )).then(data => console.log(data));
      }
    })
}
export const clearContent = () => dispatch => {
  dispatch({
    type: "CLEAR_CONTENT"
  })
}