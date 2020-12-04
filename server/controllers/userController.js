const { User } = require('../models')
const helper = require('../helpers/helper.js')
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
require('dotenv').config

class UserController {
  static async register (req, res, next) {
    try {
      const obj = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      }
      const data = await User.create(obj)
      res.status(201).json({data})
    }
    catch(err) {
      if(err.name === 'SequelizeValidationError') {
        next({
          name: 'Validation Error',
          status: 400,
          message: err.errors
        })
      } else {
        next(err)
      }
    }
  }

  static async login (req, res, next) {
    try {
      const findUser = await User.findOne({
        where: {
          email: req.body.email
        }
      })
      if(findUser) {
        if(helper.verifyPassword(req.body.password, findUser.password)) {
          const access_token = helper.generateToken({
            id: findUser.id,
            email: findUser.email
          })
          res.status(200).json({
            id: findUser.id,
            username: findUser.username,
            email: findUser.email,
            access_token
          })
        } else {
          throw {
            status: 400,
            message: `Invalid Email / Password`
          }
        }
      } else {
        throw {
          status: 400,
          message: `Invalid Email / Password`
        }
      }
    }
    catch(err) {
      next(err)
    }
  }

  static googleLogin(req, res, next) {
    let payLoad;
    client.verifyIdToken({
      idToken: req.body.googleToken,
      audience: process.env.GOOGLE_CLIENT_ID  
    })
    .then(ticket => {
      payLoad = ticket.getPayload()
      return User.findOne({
        where: {
          email: payLoad.email
        }
      })
    })
    .then(user => {
      if(user) {
        return user
      } else {
        return User.create({
          email: payLoad.email,
          password: process.env.GOOGLE_SECRET
        })
      }
    })
    .then(data => {
      let token = jwt.sign({id: data.id, email: data.email}, process.env.SECRET)
      return res.status(200).json(token)
    })
    .catch(err => {
      res.status(500).json({message: 'Internal Server Error'})
    })
  }
}

module.exports = UserController