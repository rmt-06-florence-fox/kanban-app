const jwt = require("jsonwebtoken")

function generateToken(payload){
  let token = jwt.sign(payload, process.env.SECRET_JWT);
  return token
}

module.exports = generateToken