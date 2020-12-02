const { Task, User } = require ("../models/index.js")

class TaskController {

    static async findTask (req, res, next) {
        try {
            const tasks = await Task.findAll()
            res.status(200).json(tasks)
        } catch (err) {
            next (err)
        }
    }

    static async findTaskById (req, res, next) {
        try {
            let id = req.params.id
            const tasks = await Task.findOne ({where : {id}})
            if (!tasks) {
                throw {
                    status : 404,
                    msg : "Task Not Found"
                }
            } else {
                res.status(200).json(tasks)
            }
        } catch(err) {
            next(err)
        }
    }

    static async addTask (req, res, next) {
        try {
            let data = {
                title : req.body.title,
                category : req.body.category,
                UserId : req.dataUser.id
            }
            const newTask = await Task.create(data)
            res.status(201).json(newTask)
        } catch(err) {
            console.log (err)
            next(err)
        }
    }

    static async patchTask (req, res, next) {
        try {
            let id = +req.params.id
            let data = {
                category : req.body.category
            }
            const patchTask = await Task.update(data, { 
                where : {id},
                returning: true
            })
            if (!patchTask) {
                throw {
                    status : 404,
                    msg : "Task Not Found on your list"
                }
            } else {
                res.status(200).json(patchTask[1][0])
            }
        } catch(err) {
            next(err)
        }
    }

    static async putTask (req, res, next) {
        try {
            let id = +req.params.id
            let data = {
                title : req.body.title,
                category : req.body.category,
                UserId : req.dataUser.id
            }
            const putTask = await Task.update(data, { 
                where : {id},
                returning: true
            })
            if (!putTask) {
                throw {
                    status : 404,
                    msg : "Taks Not Found on your list"
                }
            } else {
                res.status(200).json(putTask[1][0])
            }
        } catch(err) {
            next(err)
        }
    }

    static async deleteTask (req, res, next) {
        try {
            let id = req.params.id
            const result = await Task.destroy({
                where: {id}
            })
            if (!result) {
                throw {
                    status : 404,
                    msg : "Task Not Found on your list"
                }
            } else {
                res.status(200).json({msg : `Task with id ${id} Success to delete`})
            }
        } catch(err) {
            next(err)
        }
    }

}

module.exports = TaskController