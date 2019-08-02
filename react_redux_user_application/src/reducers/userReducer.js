const initialState = {
  email: 'admin@1.com',
  firstName: null,
  lastName: null,
  isAuth: false
};
export default (state = initialState, action) => {
  // let newState = JSON.parse(JSON.stringify(state));
  // console.log('user', action);
  // switch (action.type) {
  //   case "LOGIN_USER":
  //     console.log(action.payload)
  //     newState = action.payload;
  //     if (localStorage.token === undefined && state.isAuth === false) {
  //       newState.isAuth = true;
  //     }
  //     state = newState;
  //     return state;
  //   case "SIGNUP_USER":
  //     newState = JSON.parse(JSON.stringify(state));
  //     newState.isAuth = false;
  //     newState = action.payload;
  //     console.log(newState);
  //     state = newState;
  //     console.log(state);
  //     return state;

  //   case "LOGOUT_USER":
  //     newState = JSON.parse(JSON.stringify(state));
  //     console.log(newState);
  //     newState.email = null;
  //     localStorage.removeItem('token');
  //     state = newState;
  //     return state;

  //   default:
  return state;
}
// }
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