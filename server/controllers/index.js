const { Task, User }= require('../models')
const jwtHelper = require('../helpers/jwthelper')
const passHelper = require('../helpers/passhelper')

class Controller{
  static async login (req,res,next){
    try {
      const data = await User.findOne({where:{ email : req.body.email }})
      if(data && passHelper.comparePassword(req.body.password,data.password)){
        const access_token = jwtHelper.generateToken({email : data.email, id: data.id})
        console.log(access_token);
        res.status(200).json({access_token})
      }else throw {status : 400, message: 'invalid'}
    } catch (error) {
      next(error)
    }
  }

  static async register (req,res,next){
    try {
      const newUser = {
        email : req.body.email,
        password : req.body.password
      }
      console.log(newUser);
      const data = await User.create(newUser)
      console.log(data, 'sukses bang');
      res.status(201).json({ id : data.id, email : data.email }) 
    } catch (error) {
      next(error)
    }
  }

  static async create (req, res, next){
    const newTask = {
      title : req.body.title,
      category : req.body.category,
      UserId : req.currentUser.id
    }
    try {
      const createdTask = await Task.create(newTask)
      res.status(201).json({createdTask})
    } catch (error) {
      next(error)
    }
  }

  static async findall(req, res, next){
    // console.log('a');
    try {
      const tasks = await Task.findAll({})
      res.status(200).json(tasks)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller;