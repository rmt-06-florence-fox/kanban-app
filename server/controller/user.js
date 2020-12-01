const { User } = require("../models/index.js")
class UserController {

  static register(req, res, next){
    let newUser = {
      email: req.body.email,
      password: req.body.password
    }
    User.create(newUser)
      .then(user => {
        res.status(201).json(user)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}

module.exports = UserController