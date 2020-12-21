const jwt = require("jsonwebtoken");

module.exports = {
  encode(user) {
    return jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET
    );
  },
  decode(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
  },
};
