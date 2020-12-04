const {
    Task
} = require('../models')

class TaskController {
    static allTasks(req, res, next) {
        Task.findAll()
            .then(data => {
                res.status(200).json({
                    data
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static addTask(req, res, next) {
        const obj = {
            name: req.body.name,
            title: req.body.title,
            category: req.body.category,
            UserId: req.userLogIn.id
        }
        Task.create(obj)
            .then(data => {
                res.status(201).json({
                    data
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static delTask(req, res, next) {
        Task.findByPk(+req.params.id)
            .then(data => {
                if (data.UserId == req.userLogIn.id) {
                    return Task.destroy({
                        where: {
                            id: +req.params.id
                        }
                    })
                } else {
                    throw (err)
                }
            })
            .then(data => {
                console.log(data);
                res.status(200).json({
                    message: "task success to delete"
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static updateTask(req, res, next) {
        const obj = {
            name: req.body.name, 
            title: req.body.title,
            category: req.body.category,
            UserId: req.userLogIn.id
        }
        Task.findByPk(+req.params.id)
            .then(data => {
                if (data.UserId == req.userLogIn.id) {
                    return Task.update(obj, {
                        where: {
                            id: +req.params.id
                        },
                        returning: true
                    })
                } else {
                    throw (err)
                }
            })
            .then(data => {
                res.status(200).json({
                    data: data[1][0]
                })
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = TaskController