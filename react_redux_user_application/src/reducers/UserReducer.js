const initState = {
  error: null,
  success: null,
  user: {
    email: '',
  },
  isAuth: false,
};
export default function (state = initState, action) {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "LOGIN_USER":
      newState.user = action.user;
      if (localStorage.token !== null && state.isAuth === false) {
        console.log('if ')
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
