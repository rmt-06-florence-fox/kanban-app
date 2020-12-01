const {User,Task,Category} = require('../models')

class TaskController{
  static async showtask(req,res){
    
    try{
      const tasks = await Task.findAll({
        attributes : {
          exclude : [ 'updatedAt', 'createdAt' ]
        },
        order : [ [ 'updatedAt', 'ASC' ] ]
        ,
        include : [
          { model : User,
            attributes : ['name']
            }
        ]
      })
      res.status(200).json(data)
      // res.send('ya')
    }
    catch(error) {
      next(error)
    }

  }
  static async findIdtask(req,res){
    const UserId = req.loginUser.id

    try{
      const tasks = await Task.findOne({ where:{id:UserId},
        attributes : {
          exclude : [ 'updatedAt', 'createdAt' ]
        },
        order : [ [ 'updatedAt', 'ASC' ] ]
        ,
        include : [
          { model : User,
            attributes : ['name']
            }
        ]
      })
      res.status(200).json(data)
      // res.send('ya')
    }
    catch(error) {
      next(error)
    }
    
  }
  static async addtask(req,res){
    const UserId = req.loginUser.id
    const { description, CategoryId } = req.body

    try {
      const newTask = await Task.create({
        description, UserId, CategoryId
      })

      res.status(200).json({
        message : 'Task successfully added'
      })

    } catch (error) {
      next(error)
    }
    
  }

  static async edittask(req,res){
    
  }

  static async deletetask(req,res){
    const id = req.params.id
    try {

      await Task.destroy({ where : { id }})
      res.status(200).json({ message : 'Task deleted'})

    } catch (error) {
      next(error)
    }
    
  }

}

module.exports = TaskController