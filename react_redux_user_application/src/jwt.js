const jwt = require('jsonwebtoken');
function generateToken(user) {
  const u = {
    fname: user.fname,
    lname: user.lname,
    email: user.email,
    _id: user._id.toString(),
  };
  return jwt.sign(u, 'nikhil', {
    expiresIn: 60 * 60 * 24, // expires in 24 hours
  });
}

export default generateToken;
