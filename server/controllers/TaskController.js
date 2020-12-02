const { Task, User, Category } = require('../models/index')

class TaskController {
    static async addTask(req, res, next) {
        const obj = {
            title: req.body.title,
            due_date: req.body.due_date,
            CategoryId: req.body.CategoryId,
            UserId: req.loggedInUser.id
        }
        try {
            const data = await Task.create(obj)
            res.status(201).json({message: 'Create Task Successful!!'})
        } catch (error) {
            next(error)
        }
    }

    static async getTask(req, res, next) {
        try {
            let data
            if (req.loggedInUser.organization) {
                data = await Task.findAll({include: [{model: User, where: {organization: req.loggedInUser.organization}}, {model: Category}]})
            } else {
                data = await Task.findAll({where: {UserId: req.loggedInUser.id}, include: [User, Category]})
            }

            if (data) {
                res.status(200).json(data)
            } else {
                throw {
                    status: 404,
                    message: 'Data not found!!'
                }
            }
        } catch (error) {
            next(error)
        }
    }

    static async editTask(req, res, next) {
        const obj = {
            title: req.body.title,
            due_date: req.body.due_date,
            CategoryId: req.body.CategoryId
        }
        console.log(obj)
        try {
            const data = await Task.update(obj, {where: {id: Number(req.params.id)}})
            res.status(200).json({message: 'Data updated successful!!'})
        } catch (error) {
            next(error)
        }
    }

    static async doneTask(req, res, next) {
        const obj = {
            status: 'done'
        }
        try {
            const data = await Task.update(obj, {where: {id: Number(req.params.id)}})
            res.status(200).json({message: 'Task is DONE!!'})
        } catch (error) {
            next(error)
        }
    }

    static async deleteTask(req, res, next) {
        try {
            const data = await Task.destroy({where: {id: Number(req.params.id)}})
            res.status(200).json({message: 'Data deleted successful!!'})
        } catch (error) {
            next(error)
        }
    }
}


module.exports = TaskController