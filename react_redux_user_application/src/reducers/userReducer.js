const initialState = {
  email: "admin@1.com",
  firstName: "Admin",
  lastName: "1"
};
export default (state = initialState, action) => {
  // let newstate = JSON.parse(JSON.stringify(state));
  return state;
  // switch (action.type) {
  //   case "ALL_LESSON":
  //     newstate = action.lessons;
  //     state = newstate;
  //     return state;
  //   default:
  //     return state;
  // }
}