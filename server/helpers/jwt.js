const jwt = require('jsonwebtoken')
console.log('start in jwt');
const signToken = payload => {
  return access_token = jwt.sign(payload, process.env.SECRET)
}

const verifyToken = token => {
  return decoded = jwt.verify(token, process.env.SECRET)
}

module.exports = {signToken, verifyToken}
console.log('end in jwt');