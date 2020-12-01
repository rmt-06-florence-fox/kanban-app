const { User } = require('../models')
const bcrypt = require('bcryptjs')
const { generateToken } = require('../helpers/generateToken')

class UserController {
  static signup(req, res, next) {
    const payload = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }
    
    User.create({
      payload
    })
    .then(data => {
      res.status(201).json(data)
    })
    .catch(next)
  }

  static signin(req, res, next) {
    const payload = {
      email: req.body.email,
      password: req.body.password
    }

    User.findOne({
      where: {
        email: payload.email
      }
    })
    .then(data => {
      if(!data || !bcrypt.compareSync(payload.password, data.password)){
        next({name: "INVALID_EMAIL_PASS"})
      } else {
        const access_token = generateToken(data)
        res.status(200).json({access_token})
      }
    })
    .catch(next)
  }

  static googleSignIn(req, res, next) {
    res.send('google')
  }

}

module.exports = UserController