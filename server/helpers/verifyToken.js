const jwt = require("jsonwebtoken")

function verifyToken(access_token){
  return jwt.verify(access_token, process.env.SECRET_JWT);
}

module.exports = verifyToken