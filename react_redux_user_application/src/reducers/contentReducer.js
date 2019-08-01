const initialState = [];
export default (state = initialState, action) => {
  let newstate = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "CONTENT":
      let data = { type: action.format, data: action.data }
      newstate.push(data);
      state = newstate;
      console.log('content', state);
      return state;
    default:
      return state;
  }
}