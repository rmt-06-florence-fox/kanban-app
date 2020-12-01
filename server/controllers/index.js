const { Task, User }= require('../models')
const jwtHelper = require('../helpers/jwthelper')
const passHelper = require('../helpers/passhelper')

class Controller{
  static async login (req,res,next){
    try {
      const user = await User.findOne({where:{ email : req.body.email }})

      if(user && passHelper.comparePassword(req.body.password,User.password)){
        const access_token = jwtHelper.generateToken({email : User.email, id: User.id})
        res.status(200).json({access_token})
      }else throw {status : 400, message: 'invalid'}
    } catch (error) {
      next(error)
    }
  }

  static async register (req,res,next){
    let newUser = {
      email : req.body.email,
      password : req.body.password
    }
    try {
      const user = await User.create(newUser,{})
      if(user){
        res.status(200).json({ id : user.id, password : user.email })
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller;