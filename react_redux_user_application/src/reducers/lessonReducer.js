const initialState = [];
export default (state = initialState, action) => {
  let newstate = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "ALL_LESSON":
      console.log('in reducers');
      newstate = action.lessons;
      state = newstate;
      return state;
    default:
      return state;
  }
}