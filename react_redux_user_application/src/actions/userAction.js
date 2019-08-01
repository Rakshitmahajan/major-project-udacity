
// import { LOGIN_USER, SIGNUP_USER } from './types';

export const loginUser = data => dispatch => {
  fetch('http://localhost:3002/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(data1 => {
      dispatch({
        type: 'LOGIN_USER',
        payload: data1,
      });
    })
    .catch(err => console.log(err));
};

export const signupUser = data => dispatch => {
  console.log(data);

  fetch('http://localhost:3002/auth/signup', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(data1 => {
      dispatch({
        type: 'SIGNUP_USER',
        payload: data1,
      });
    });
};