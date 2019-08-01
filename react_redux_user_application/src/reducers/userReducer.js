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
/*
import { LOGIN_USER, SIGNUP_USER, LOGOUT_USER } from '../actions/types';
const initState = {
  error: null,
  success: null,
  user: null,
  isAuth: false,
};
let newState = {};
export default function (state = initState, action) {
  switch (action.type) {
    case LOGIN_USER:
      newState = JSON.parse(JSON.stringify(state));
      newState = action.payload;
      if (localStorage.token === undefined && state.isAuth === false) {
        newState.isAuth = true;
      }
      state = newState;
      return state;
    case SIGNUP_USER:
      newState = JSON.parse(JSON.stringify(state));
      newState.isAuth = false;
      newState = action.payload;
      state = newState;
      return state;
    case LOGOUT_USER:
      newState = JSON.parse(JSON.stringify(state));
      newState.isAuth = false;
      localStorage.removeItem('token');
      state = newState;
      return state;
    default:
      return state;
  }
}
*/