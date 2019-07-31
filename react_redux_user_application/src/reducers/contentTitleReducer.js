const initialState = [];
export default (state = initialState, action) => {
  let newstate = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "CONTENT_TITLE":
      newstate.push(action.data);
      state = newstate;
      return state;
    default:
      return state;
  }
}