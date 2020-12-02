const jwtHelper = require('../helpers/jwthelper')
const { Task } = require('../models')

module.exports = async (req, res, next)=>{
  try {
    const task = await Task.findOne({ where : { id : +req.params.id } })
    if(!task){
      throw { status : 404 , message : "task not found" }
    }
    if(task.UserId == req.currentUser.id){
      next()
    } else {
      throw { status : 401 , message : "you are not allowed" }
    }
  } catch (error) {
    next(error)
  }
}