const { User } = require('../models')
const Helper = require('../helper/helper')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

class Controller{
  static async register(req, res, next){
    try{
      const payload = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }
      const data = await User.create(payload)
      res.status(201).json({data})
    }catch(err){
      if(err.name === 'SequelizeValidationError') {
        next({
          name: 'Validation Error',
          status: 400,
          message: err.errors
        })
      }else next(err)
    }
  }
  static async login(req, res, next){
    try{
      const findData = await User.findOne({
        where: { email: req.body.email }
      })
      if(findData){
        if(Helper.verifyPassword(req.body.password, findData.password)){
          const access_token = Helper.generateToken({
            id: findData.id,
            email: findData.email
          })
          res.status(200).json({
            id: findData.id,
            email: findData.email,
            name: findData.name,
            access_token
          })
        }else{
          throw{
            status: 400,
            message: `Invalid email / password !`
          }
        }
      }else{
        throw{
          status: 400,
          message: `Invalid account !`
        }
      }
    }catch(err){
      next(err)
    }
  }
  static googleLogin(req, res, next){
    let payload
    client.verifyIdToken({
      idToken: req.body.googleToken,
      audience: process.env.GOOGLE_CLIENT_ID
    })
      .then(ticket =>{
        payload = ticket.getPayload()
        return User.findOne({
          where: { email: payload.email }
        })
      })
      .then(data =>{
        if(data) return data
        else{
          return User.create({
            name: payload.name,
            email: payload.email,
            password: process.env.passwordUser
          })
        }
      })
      .then(data =>{
        const access_token = Helper.generateToken({
          id: data.id,
          email: data.email
        })
        res.status(200).json({
          id: data.id,
          email: data.email,
          name: data.name,
          access_token
        })      
      })
      .catch(err => next(err))
  }
}

module.exports = Controller