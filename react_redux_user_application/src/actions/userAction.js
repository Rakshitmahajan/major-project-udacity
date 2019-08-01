import generateToken from '../jwt';
export const loginUser = data => dispatch => {
  fetch('http://10.10.4.101:2001/studentLogin', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(Response => Response.json())
    .then((response) => {
      console.log(response)
      // if (response.err === null) {
      console.log(response);
      localStorage.setItem('token', generateToken(response.data));
      dispatch({
        type: 'LOGIN_USER',
        payload: response.data,
        redirect: true
      });
      // this.setState({ redirect: true })
      // } else {
      //   alert(response.err.message);
      // }
    });
  // fetch('http://localhost:3002/auth/login', {
  //   method: 'POST',
  //   body: JSON.stringify(data),
  //   headers: { 'Content-Type': 'application/json' },
  // })
  //   .then(res => res.json())
  //   .then(data1 => {
  //     localStorage.setItem('token', generateToken(data1.user));
  //     dispatch({
  //       type: 'LOGIN_USER',
  //       payload: data1,
  //     });
  //   })
  //   .catch(err => console.log(err));
};

export const signupUser = data => dispatch => {
  fetch('http://10.10.2.69:2001/studentSignup', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(Response => Response.json())
    .then((response) => {
      if (response.err === null) {
        dispatch({
          type: 'SIGNUP_USER',
          payload: response.data,
        });
      } else {
        alert(response.err.message);
      }
    });
  // fetch('http://localhost:3002/auth/signup', {
  //   method: 'POST',
  //   body: JSON.stringify(data),
  //   headers: { 'Content-Type': 'application/json' },
  // })
  //   .then(res => res.json())
  //   .then(data1 => {
  //     dispatch({
  //       type: 'SIGNUP_USER',
  //       payload: data1,
  //     });
  //   });
};
export const logout = () => dispatch => {
  dispatch({
    type: 'LOGOUT_USER'
  })
}