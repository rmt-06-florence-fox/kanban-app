const { Task } = require('../models')


class TaskController{
  static async getAll(req,res){
    try{
      let tasks = await Task.findAll({
        where: {
          UserId: req.loggedIn.id
        },
        // include: ,
        order: [['due', 'ASC']]
      });
      console.log(tasks)
      res.status(200).json(tasks)
    }
    catch(err){
      res.status(400).json(err)
    }
  }
  static async create(req,res){
    console.log(req.loggedIn)
    let newTask = {
      title: req.body.title,
      description: req.body.description,
      deadline: req.body.deadline,
      category: req.body.category,
      UserId: req.loggedIn.id,
      DepartmentId:req.loggedIn.DepartmentId,
    }
    try {
      let task = await Task.create(newTask)
      res.status(201).json(task)
    } catch (err) {
      res.status(500).json(err)
    }
  }
}

module.exports= TaskController