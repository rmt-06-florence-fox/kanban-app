const { Task, User } = require('../models')

class TaskController {
    static async addTask(req, res, next) {
        try {
            let payload = {
                title: req.body.title,
                description: req.body.description,
                point: +req.body.point,
                assignedto: req.body.assignedto,
                status: req.body.status,
                UserId: +req.loggedInUser.id,
                createdBy: req.loggedInUser.name
            }

            let data = await Task.create(payload)
            res.status(201).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async findAll(req, res, next) {
        try {
            let data = await Task.findAll()
            res.status(200).json({ task: data })
        } catch (error) {
            next(error)
        }
    }

    static async getById(req, res, next) {
        try {
            let id = +req.params.id
            let data = await Task.findOne({ where: { id } })
            res.status(200).json({ task: data })
        } catch (error) {
            next(error)
        }
    }

    static async updateTask(req, res, next) {
        try {
            let id = +req.params.id

            let payload = {
                title: req.body.title,
                description: req.body.description,
                point: +req.body.point,
                assignedto: req.body.assignedto,
                status: req.body.status
            }
            let data = await Task.update(payload, { where: { id }, returning: true })
            res.status(200).json({ task: data[1][0] })
        } catch (error) {
            next(eror)
        }
    }

    static async updateStatus(req, res, next) {
        try {
            let id = +req.params.id

            let payload = {
                status: req.body.status
            }
            let data = await Task.update(payload, { where: { id }, returning: true })
            res.status(200).json({ task: data[1][0] })
        } catch (error) {
            next(eror)
        }
    }

    static async del(req, res, next) {
        try {
            let id = +req.params.id
            let data = await Task.destroy({ where: { id } })
            res.status(200).json({ message: 'Task successfuly deleted' })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = TaskController