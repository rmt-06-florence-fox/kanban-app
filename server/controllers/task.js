const { Task } = require('../models')

class TaskController {
    static async fetchAll(req, res, next) {
        try {
            const tasks = await Task.findAll()
            res.status(200).json({tasks})
        } catch (error) {
            next(error)
        }
    }

    static async addTask(req, res, next) {
        const payload = {
            title:req.body.title,
            category:req.body.category,
            UserId:req.loggedIn.id
        }

        try {
            const task = await Task.create(payload, {
                returning:true
            })

            res.status(200).json({task})

        } catch (error) {
            next(error)
        }
    }

    static async putTask(req, res, next) {
        const id = req.params.id
        const payload = {
            title: req.body.title,
            category: req.body.category
        }

        try {
            const task = await Task.update(payload, {
                where: {
                    id
                },
                returning:true,
                individualHooks: true
            })

            res.status(200).json({task: task[1][0]})

        } catch (error) {
            next(error)
        }
    }

    static async patchTask(req, res, next) {
        const id = req.params.id
        const payload = {
            category: req.body.category
        }

        try {
            const task = await Task.update(payload, {
                where: {
                    id
                },
                returning:true,
            })

            res.status(200).json({task: task[1][0]})
        } catch (error) {
            next(error)
        }
    }

    static async deleteTask(req, res, next) {
        const id = req.params.id

        try {
            const task = await Task.destroy({
                where: {
                    id
                }
            })

            res.status(200).json({message: `Task Deleted Successfully`})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = TaskController