const { Task, User } = require('../models')

class TaskController {
    static async addTask (req, res, next){
        try {
            let payload = {
                title: req.body.title,
                description: req.body.description,
                point: +req.body.point,
                assignedto: req.body.assignedto,
                status: req.body.status,
                UserId: +req.loggedInUser.id
            }
            console.log(req.loggedInUser);

            let data = await Task.create(payload)
            res.status(201).json(data)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = TaskController