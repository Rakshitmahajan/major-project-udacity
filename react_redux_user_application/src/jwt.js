const jwt = require('jsonwebtoken');
function generateToken(user) {
  const u = {
    fname: user.firstName,
    lname: user.lastName,
    email: user.email
  };
  return jwt.sign(u, 'udacity', {
    expiresIn: 60 * 60 * 24, // expires in 24 hours
  });
}
export default generateToken;