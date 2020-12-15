const { Task, User } = require('../models')

class TaskController {
    static async inputTask(req, res, next) {
        try {
            const obj = {
                title: req.body.title,
                category: req.body.category,
                UserId: req.loggedInUser.id
            }
            const data = await Task.create(obj)
            res.status(201).json(data)
        } catch (err) {
            next(err)
        }
    }

    static async showList(req, res, next) {
        try {
            const task = await Task.findAll({
                include: [User] 
            })
            res.status(200).json(task)
        } catch (err) {
            next(err)
        }
    }

    static async updateTask(req, res, next) {
        try {
            const id = Number(req.params.id)
            const obj = {
                title: req.body.title
                // category: req.body.category
            }
            const data = await Task.update(obj, {
                where: {
                    id
                },
                returning: true
            })
            res.status(200).json(data[1][0])
        } catch (err) {
            next(err)
        }
    }

    static async updateCategory(req, res, next) {
        try {
            const id = Number(req.params.id)
            const obj = {
                category: req.body.category
            }
            const data = await Task.update(obj, {
                where: {
                    id
                },
                returning: true
            })
            res.status(200).json(data[1][0])
        } catch (err) {
            next(err)
        }
    }

    static async deleteTask(req, res, next) {
        try {
            const id = Number(req.params.id)
            const data = await Task.destroy({
                where: {
                    id
                }
            })
            res.status(200).json({ message: `Task Success to Delete` })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = TaskController