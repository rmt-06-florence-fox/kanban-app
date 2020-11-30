const { User } = require('../models')
const { compare } = require('../helpers/passwordHandler.js')
const { generateToken } = require('../helpers/tokenHandler.js')

class UserC {

  //register
  static async register(req, res, next) {
    try {
      const payload = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      };
      const data = await User.create(payload);
      res.status(201).json(data);
    } catch (error) {
      next(error)
    }
  }
  
  //login
  static login(req, res, next) {
    
  }
}

module.exports = UserC