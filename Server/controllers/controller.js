const { User } = require('../models')
const Helper = require('../helper/helper')

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
}

module.exports = Controller