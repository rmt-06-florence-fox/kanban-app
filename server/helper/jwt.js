const jwt = require('jsonwebtoken')

let makeToken = (obj) => {
  return jwt.sign(obj, process.env.SECRET);
}

let decode = (token) => {
  return jwt.verify(token, process.env.SECRET)
}

module.exports = {makeToken, decode}