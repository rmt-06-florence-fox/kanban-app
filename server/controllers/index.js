const { Task, User }= require('../models')
const jwtHelper = require('../helpers/jwthelper')
const passHelper = require('../helpers/passhelper')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);


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
    try {
      const tasks = await Task.findAll({ include : [ User ]})
      res.status(200).json(tasks)
    } catch (error) {
      next(error)
    }
  }

  static async edit(req, res, next){
    const id = +req.params.id
    console.log(id);
    const editTask = {
      title : req.body.title,
      category : req.body.category
    }
    try {
      const editedTask = await Task.update(editTask, { where : { id }, returning : true })
      if(editedTask[0] > 0){
        res.status(200).json(editedTask[1][0])
      }else{
        throw { status : 404, message : "task not found"}
      }
    } catch (error) {
      next(error)
    }
  }

  static async delete(req, res, next){
    try {
      const id = + req.params.id
      const deletedTask = await Task.destroy({ where : { id }, returning : true })
      if(deletedTask > 0){
        res.status(200).json({ message : "succesfully delete a task"})
      } else {
        throw {status : 404 , message : "task not found"}
      }
    } catch (error) {
      next(error)
    }
  }

  static async googleLogin(req, res, next){
    try {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: provess.env.CLIENT_ID,
      });
      const payload = ticket

      const user = await User.findOne({ where : {email : payload.email}})

      if(!user){
        const newGoogleUser = User.create({ email : payload.email , password : process.env.GOOGLE_USER_PASS })
        const access_token = jwtHelper.generateToken({ id : newGoogleUser.id , email : newGoogleUser.email})

        res.status(200).json({access_token})
      }else{
        const access_token = jwtHelper.generateToken({ id : user.id , email : user.email})

        res.status(200).json({access_token})
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller;