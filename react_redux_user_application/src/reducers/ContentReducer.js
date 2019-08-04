const initialState = []
export default (state = initialState, action) => {
  let newstate = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "ALL_CONTENT":
      newstate.push(action.data);
      return newstate;
    case "CLEAR_CONTENT":
      newstate = []
      return newstate;
    default:
      return state;
  }
}
