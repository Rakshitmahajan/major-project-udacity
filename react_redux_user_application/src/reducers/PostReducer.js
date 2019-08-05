const initialState = {
  user: {},
  allPost: [],
  displayPost: [],
  myPost: [],
  myAnswer: [],
  postAnswer: [],
}
export default (state = initialState, action) => {
  let newstate = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "USER":
      newstate.user = action.user;
      return newstate;
    case "ALL_POST":
      newstate.allPost = action.allPost;
      return newstate;
    case "DISPLAY_POST":
      newstate.displayPost = state.allPost.slice(action.start, action.end);
      return newstate;
    case "MY_POST":
      newstate.myPost = action.myPost;
      return newstate;
    case "MY_ANSWER":
      newstate.myAnswer = action.myAnswer;
      return newstate;
    case "POST_ANSWER":
      newstate.postAnswer.push(action.answer);
      return newstate;
    case "CLEAR_ANSWER":
      newstate.postAnswer = [];
      return newstate;
    case "UPVOTES_GIVEN":
      newstate.user.upvotesGiven += action.upvotesGiven
      return newstate;
    default:
      return state;
  }
}
