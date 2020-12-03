const {Task} = require('../models')

class TasksController {
    static async createTask(req, res) {
        try {
            let newTask = {
                title: req.body.title,
                description: req.body.description,
                category: req.body.category,
                UserId: req.loggedIn.id
            }
            const data = await Task.create(newTask)
            res.status(201).json({data})
        } catch (error) {
            res.status(500).json({message: "Internal server error"})
        }
    }

    static async getTask(req, res) {
        try {
            const data = await Task.findAll()
            res.status(200).json({data})
        } catch (error) {
            res.status(500).json({message: "Internal server error"})
        }
    }

    static async editTask(req, res) {
        try {
            let editedTask = {
                title: req.body.title,
                description: req.body.description,
                category: req.body.category,
            }
            let id = +req.params.id
            const data = await Task.update(editedTask, {
                where: {
                    id
                },
                returning: true
            })
            if(!data[1].length) res.status(404).json({message: "Data not found!"})
            else res.status(200).json(data[1][0])
        } catch (error) {
            res.status(500).json({message: "Internal server error"})
        }
    }

    static async deleteTask(req, res) {
        try {
            let id = +req.params.id
            const data = await Task.destroy({
                where: {
                    id
                }
            })
            if (!data) res.status(404).json({message: "Data not found!"})
            else res.status(200).json({message: "Task has been deleted!"})
        } catch (error) {
            res.status(401).json({message: "you are not authorized to access this todo!"})
        }
    }
}

module.exports = TasksController