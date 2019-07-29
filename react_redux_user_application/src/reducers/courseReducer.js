const initialState = [];
export default (state = initialState, action) => {
  let newstate = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "ALL_COURSE":
      newstate = action.courses;
      state = newstate;
      return state;
    default:
      return state;
  }
}
/*
case "DELETE_COMPANY":
  newstate = newstate.filter(data => data.title !== action.title);
  state = newstate;
  return state;
case "ADD_COMPANY":
  newstate.push(action.response);
  state = newstate;
  return state;
case "UPDATE_COMPANY":
  newstate = newstate.filter(data => {
    if (data.title === action.response.title) return action.response;
    return data;
  });
  state = newstate;
  return state;
  */