export const addPost = (data, id) => dispatch => {
  let post = { question: data.question, detail: data.detail, category: data.category, user: id }
  console.log(post);
  fetch(`http://10.10.5.192:3032/post`, {
    method: "POST",
    body: JSON.stringify(post),
    headers: { "Content-Type": "application/json" }
  }).then(res => res.json())
    .then(resp => console.log(resp))
}
export const allPost = () => dispatch => {
  fetch(`http://10.10.5.192:3032/post`)
    .then(res => res.json())
    .then(resp => {
      dispatch({
        type: "ALL_POST",
        allPost: resp.data
      })
    })
}
export const myPost = (id) => dispatch => {
  fetch(`http://10.10.5.192:3032/post/mypost/${id}`)
    .then(res => res.json())
    .then(resp => {
      dispatch({
        type: "MY_POST",
        myPost: resp.data
      })
    })
}
export const answerDetail = (answerArray) => dispatch => {
  dispatch({ type: "CLEAR_ANSWER" })
  answerArray.map(data => {
    fetch(`http://10.10.5.192:3032/answer/detail/${data}`)
      .then(res => res.json())
      .then(resp => {
        if (resp.error === null)
          dispatch({ type: "POST_ANSWER", answer: resp.data })
      })
    // console.log(data);
  })
}
export const addAnswer = (data, user) => dispatch => {
  console.log(user);
  fetch(`http://10.10.5.192:3032/answer`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  }).then(res => res.json())
    .then(resp => {
      let postData = { postId: data.post, answerId: resp.data._id };
      fetch(`http://10.10.5.192:3032/post/addanswer`, {
        method: "PUT",
        body: JSON.stringify(postData),
        headers: { "Content-Type": "application/json" }
      }).then(res => res.json())
        .then(resp1 => {
          console.log('addAnswer to post', resp1, resp)
          let answ = resp.data;
          answ.user = user;
          dispatch({ type: "POST_ANSWER", answer: answ })
        })
    })
}
export const userKnowledge = (id) => dispatch => {
  fetch(`http://10.10.5.192:3032/user/${id}`)
    .then(res => res.json())
    .then(resp => {
      dispatch({
        type: 'USER',
        user: resp.data
      })
    })
}
export const updatePostUpvotes = (data) => dispatch => {
  fetch(`http://10.10.5.192:3032/post/upvotes`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(resp => {
      // console.log(resp)
    })
}
export const updateUserUpvotesReceived = (data) => dispatch => {
  fetch(`http://10.10.5.192:3032/user/upvotesReceived`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  }).then(res => res.json())
    .then(resp => {
      // console.log(resp)
    })

}
export const updateUserUpvotesGiven = (data) => dispatch => {
  fetch(`http://10.10.5.192:3032/user/upvotesGiven`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  }).then(res => res.json())
    .then(resp => {
      dispatch({
        type: "UPVOTES_GIVEN",
        upvotesGiven: 1
      })
    })
}