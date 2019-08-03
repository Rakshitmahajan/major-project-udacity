const initialState = [];
export default (state = initialState, action) => {
  let newstate = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "CONTENT_TITLE":
      let flag = 0;
      newstate.map(data => {
        if (data.conceptTitle === action.data.conceptTitle) flag = 1;
        return data;
      })
      if (flag === 0) {
        newstate.push(action.data);
      }
      if (action.error === 1) {
        return [];
      }
      state = newstate;
      return state;
    default:
      return state;
  }
}