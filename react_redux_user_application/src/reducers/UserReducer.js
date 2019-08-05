const initState = {
  error: null,
  success: null,
  user: {
    email: 'admin@1.com',
  },
  isAuth: false,
};
export default function (state = initState, action) {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "LOGIN_USER":
      newState = action.payload;
      if (localStorage.token === undefined && state.isAuth === false) {
        newState.isAuth = true;
      }
      state = newState;
      return state;
    case "SIGNUP_USER":
      newState.isAuth = false;
      newState = action.payload;
      state = newState;
      return state;
    case "LOGOUT_USER":
      newState.isAuth = false;
      localStorage.removeItem('token');
      state = newState;
      return state;
    default:
      return state;
  }
}
