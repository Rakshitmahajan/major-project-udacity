import generateToken from '../jwt';

export const loginUser = data => dispatch => {
  dispatch({ type: "LOGIN_USER", user: data })
};

export const signupUser = data => dispatch => {
  fetch('https://protected-citadel-24373.herokuapp.com/auth/signup', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(data1 => {
      dispatch({
        type: "SIGNUP_USER",
        payload: data1,
      });
    })
    .catch(err => console.log(err));
};

export const logoutUser = () => dispatch => {
  dispatch({
    type: "LOGOUT_USER",
  });
};
