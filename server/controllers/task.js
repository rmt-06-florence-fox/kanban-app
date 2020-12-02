const {Task} = require('../models')

class TaskController {
    static async getTasks(req, res, next) {
        try {
            const data = await Task.findAll()
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async createTask(req, res, next) {
        const data = {
            title: req.body.title,
            UserId: req.loggedInUser.id,
            CategoryId: +req.body.CategoryId
        }
        try {
            console.log(data);
            const newData = await Task.create(data)
            res.status(201).json(newData)
        } catch (error) {
            next(error)
        }
    }

    static async getTaskById(req, res, next) {
        try {
            const idTask = req.params.id
            const data = await Task.findByPk(idTask)
            if (!data) {
                throw {
                    status: 404,
                    message: 'Data Not Found'
                }
            } else {
                res.status(200).json(data)
            }
        } catch (error) {
            next(error)
        }
    }

    static async updateTask(req, res, next) {
        try {
            const idTask = req.params.id
            const data = {
                title: req.body.title,
                CategoryId: req.body.CategoryId
            }
            const dataTask = await Task.findByPk(idTask)
            if (!dataTask) {
                throw {
                    status: 404,
                    message: 'Data Not Found'
                }
            } else {
                const updatedTask = await Task.update(data, {
                    where: {
                        id: idTask
                    },
                    returning: true
                })
                res.status(200).json(updatedTask[1][0])
            }
        } catch (error) {
            next(error)
        }
    }

    static async deleteTask(req, res, next) {
        try {
            const idTask = req.params.id
            const data = await Task.findByPk(idTask)
            if (!data) {
                throw {
                    status: 404,
                    message: 'Data Not Found'
                }
            } else {
                await Task.destroy({
                    where: {
                        id: idTask
                    }
                })
                res.status(200).json({message: 'Task deleted successfully'})
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = TaskController