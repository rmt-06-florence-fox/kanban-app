const {Task, User} = require('../models')

class TaskController {
    static async findAll (req, res, next) {
        try {
            const tasks = await Task.findAll({
                include: User
            })
            res.status(200).json(tasks)
        }
        catch(error) {
            next(error)
        }
    }

    static async addTask(req, res, next) {
        try {
            const { title, category } = req.body
            const newtask = await Task.create({
                title, category, UserId: req.loggedIn.id
            })
            res.status(201).json(newtask)
        }
        catch(error) {
            next(error)
        }
    }

    static async updateTask(req, res, next) {
        try {
            const id= req.params.id
            const{ title, category } = req.body
            const task = await Task.findByPk(id)

            if(!task) {
                throw { message: 'Task not found'}
            }
            const update = await Task.update({ title, category },{
                where: {id},
                returning: true
            })
            res.status(200).json(update[1][0])
        }
        catch(error) {
            next(error)
        }
    }

    static async TaskById(req, res, next) {
        try {
            const id = req.params.id
            const task = await Task.findOne({
                where: {
                    id: id
                }
            })
            if(!task) {
                res.status(404).json({message: 'Task not found'})
            }
            else {
                res.status(200).json(task)
            } 
        }
        catch(error) {
            next(error)
        }
    }

    static async deleteTask(req, res, next) {
        try {
            const id = req.params.id
            const tasks = await Task.findByPk(id)
            if(!tasks) {
                throw { message: 'Task not found'}
            }
            const task = await Task.destroy({
                where: {
                    id
                }
            })
            res.status(200).json({ message: 'Delete Task success'})
        }
        catch(error) {
            next(error)
        }
    }
}

module.exports = TaskController