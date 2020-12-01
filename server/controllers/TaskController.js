const { Task } = require("../models")

class TaskController {
    static getAllTask(req, res, next) {
        Task.findAll()
            .then(data => {
                if (data.length === 0) {
                    res.status(404).json({msg: "DataNotFound"})
                } else {
                    res.status(200).json(data)
                }
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static createTaks(req, res, next) {
        const newTask = {
            title: req.body.title,
            category: req.body.category,
            UserId: req.LoginUser.id
        }
        Task.create(newTask)
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static updateTask(req, res, next) {
        const id = req.params.id
        const updateTask = {
            title: req.body.title,
            category: req.body.category
        }
        
        Task.update(updateTask, {
            where: {
                id
            },
            returning: true
        })
            .then(data => {
                res.status(200).json(data[1][0])
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static deleteTask(req, res, next) {
        const id = req.params.id
        Task.destroy({
            where: {
                id
            }
        })
            .then(data => {
                res.status(200).json({msg: "Success Delete"})
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = TaskController