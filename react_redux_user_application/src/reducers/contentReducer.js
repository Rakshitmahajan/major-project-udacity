const initialState = [];
export default (state = initialState, action) => {
  let newstate = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "CONTENT":
      let data = { type: action.format, data: action.data }
      if (action.key === 0) {
        newstate = [];
      } else {
        newstate.push(data);
      }
      state = newstate;
      return state;
    default:
      return state;
  }
}