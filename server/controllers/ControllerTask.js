const { Task } = require('../models/index')

class ControllerTask {
    static getTask(req, res, next) {
        Task.findAll()
        .then(responseData => {
            res.status(200).json(responseData)
        })
        .catch(err => {
            next(err)
        })
    }

    static addTask(req, res, next) {
        const newTask = {
            title: req.body.title,
            category: req.body.category,
            UserId: req.loggedInUser.id
        }

        Task.create(newTask)
        .then(responseData => {
            res.status(201).json(responseData)
        })
        .catch(err => {
            next(err)
        })
    }

    static updateTask(req, res, next) {
        const updatedTask = {
            title: req.body.title,
            category: req.body.category
        }

        Task.update(updatedTask, {
            where: {
                id: req.params.id
            },
            returning: true
        })
        .then(responseData => {
            res.status(200).json(responseData[1][0])
        })
        .catch(err => {
            next(err)
        })
    }

    static patchTask(req, res, next) {
        const updatedCategory = {
            category: req.body.category
        }
        Task.update(updatedCategory, {
            where: {
                id: req.params.id
            },
            returning: true
        })
        .then(responseData => {
            res.status(200).json(responseData[1][0])
        })
        .catch(err => {
            next(err)
        })
    }

    static deleteTask(req, res, next) {
        Task.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(responseData => {
            console.log(responseData);
            res.status(200).json({
                message: 'Data deleted successfully!'
            })
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = ControllerTask