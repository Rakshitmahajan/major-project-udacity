const initialState = [];
export default (state = initialState, action) => {
  let newstate = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "ALL_LESSON":
      newstate = action.lessons;
      state = newstate;
      return state;
    default:
      return state;
  }
}