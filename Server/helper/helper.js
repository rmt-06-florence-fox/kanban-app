const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

class Helper{
  static generatePassword(pass){
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(pass, salt)
    return hash
  }
  static verifyPassword(pass, hashPass){
    return bcrypt.compareSync(pass, hashPass)
  }
  static generateToken(payload){
    return jwt.sign(payload, process.env.JWT)
  }
  static verifyToken(payload){
    return jwt.verify(payload, process.env.JWT)
  }
}

// console.log(Helper.generatePassword('123456'));
// console.log(Helper.verifyPassword('123456', '$2a$10$azz.5RWAWARBjb4au8tPDOmMIbKS4x9Rj6L7tbFpV0JaUed0f/oA2'));

module.exports = Helper