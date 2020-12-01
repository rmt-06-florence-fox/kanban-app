const jwt = require('jsonwebtoken')

class JwtHelper{
  static generateToken(obj){
    return jwt.sign(obj,process.env.SECRET)
  }

  static decodeToken(token){
    return jwt.verify(token,process.env.SECRET)
  }
}

module.exports = JwtHelper;