const { Task, User } = require("../models")

class TaskController {
    static getAllTask(req, res, next) {
        Task.findAll(
            {
                include: {
                    model: User,
                    attributes: ["email"]
                }
            }
        )
            .then(data => {
                if (data.length === 0) {
                    next({name: "DataNotFound"})
                    // res.status(404).json({msg: "DataNotFound"})
                } else {
                    res.status(200).json(data)
                }
            })
            .catch(err => {
                next(err)
                // res.status(500).json(err)
            })
    }

    static getTaskById(req, res, next) {
        const id = req.params.id
        Task.findOne({
            where: {
                id
            }
        })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                next(err)
                // res.status(500).json(err)
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
                next(err)
                // res.status(500).json(err)
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
                if (data[1][0]) {
                    res.status(200).json(data[1][0])
                } else {
                    next({name: "DataNotFound"})
                }
            })
            .catch(err => {
                next(err)
                // res.status(500).json(err)
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
                next(err)
                // res.status(500).json(err)
            })
    }
}

module.exports = TaskController