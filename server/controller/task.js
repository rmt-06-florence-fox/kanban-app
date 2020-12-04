const { Task, Category, User } = require("../models/index.js")
const task = require("../models/task.js")

class TaskController {
  static addTask(req, res, next){
    let newTask = {
      Title: req.body.title,
      due_date: req.body.due_date,
      UserId: req.loggedInUser.id,
      CategoryId: req.body.CategoryId
    }
    Task.create(newTask)
      .then(task => {
        res.status(201).json({
          task: task.Title,
          due_date: task.due_date
        })
      })
      .catch(err => {
        console.log(err.message + " <<< ini dari controller task, fungsi add")
        next(err)
      })
  }

  static showAllTasks(req, res, next){
    Task.findAll({
      include: [Category, User]
    })
      .then(rawTasks => {
        let tasks = []
        for (let i = 0; i < rawTasks.length; i++){
          let template = {
            id: rawTasks[i].id,
            name: rawTasks[i].Title,
            due_date: rawTasks[i].due_date,
            createdBy: rawTasks[i].User.email,
            categoryName: rawTasks[i].Category.name,
            categoryId: rawTasks[i].Category.id
          }
          tasks.push(template)
        }
        res.status(200).json(tasks)
      })
      .catch(err => {
        console.log(err.message + " <<< ini dari controller task, fungsi showAll")
        next(err)
      })
  }

  static showTaskById(req, res, next){
    Task.findOne({
      where: {
        id: +req.params.id
      },
      include: [Category, User]
    })
      .then(rawTask => {
        if(!rawTask){
          throw {
            status: 404,
            message: "Error! Data not found"
          }
        }
        else {
          let task = {
            id: rawTask.id,
            name: rawTask.Title,
            due_date: rawTask.due_date,
            createdBy: rawTask.User.email,
            categoryName: rawTask.Category.name,
            categoryId: rawTask.Category.id
          }
          res.status(200).json(task)
        }
      })
      .catch(err => {
        console.log(err.message + " <<< ini dari controller task, fungsi showById")
        next(err)
      })
  }

  static updateTask(req, res, next){
    let updatedTask = {
      Title: req.body.title,
      due_date: req.body.due_date,
      UserId: req.loggedInUser.id,
      CategoryId: req.body.CategoryId
    }

    Task.update(updatedTask, {
      where: {
        id: +req.params.id
      },
      returning: true,
      validate: false
    })
      .then(task => {
        if (task[1].length){
          res.status(200).json(task[1][0])
        }
        else {
          throw {
            status: 404,
            message: "Error! Data not found"
          }
        }
      })
      .catch(err => {
        console.log(err.message + " <<< ini dari controller task, fungsi updateTask")
        next(err)
      })
  }

  static updateCategory(req, res, next){
    let updatedTaskCategory = {
      CategoryId: req.body.CategoryId
    }
    Task.update(updatedTaskCategory, {
      where: {
        id: +req.params.id
      },
      returning: true,
      validate: false
    })
      .then(task => {
        if (task[1].length){
          res.status(200).json(task[1][0])
        }
        else {
          throw {
            status: 404,
            message: "Error! Data not found"
          }
        }
      })
      .catch(err => {
        console.log(err.message + " <<< ini dari controller task, fungsi updateCategory")
        next(err)
      })
  }

  static deleteTask(req, res, next){
    Task.destroy({
      where: {
        id: +req.params.id
      }
    })
    .then(user => {
      if (user === 0){
        throw {
          status: 404,
          message: "Error! Data not found"
        }
      }
      else {
        res.status(200).json({message: "Task is successfully deleted"})
      }
    })
    .catch(err => {
      console.log(err.message + " <<< ini dari controller task, fungsi deleteTask")
      next(err)
    })
  }

  static getCategories(req, res, next){
    Category.findAll()
      .then(categories => {
        res.status(200).json(categories)
      })
      .catch(err => {
        console.log(err.message + " <<< ini dari controller user, fungsi getCategories")
        next(err)
      })
  }

}

module.exports = TaskController