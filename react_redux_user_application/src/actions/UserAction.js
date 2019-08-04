import generateToken from '../jwt';

export const loginUser = data => dispatch => {
  fetch('https://protected-citadel-24373.herokuapp.com/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(data1 => {
      if (data1.error !== null) {
      } else {
        localStorage.setItem('token', generateToken(data1.user));
        dispatch({
          type: "LOGIN_USER",
          payload: data1,
        });
      }
    })
    .catch(err => console.log(err));
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
