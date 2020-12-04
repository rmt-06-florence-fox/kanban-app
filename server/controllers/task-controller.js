const {Task} = require('../models')

class TaskController {
    static addTask(req, res, next){
        const newTask = {
            title: req.body.title,
            category: req.body.category,
            UserId: req.loggedInUser.id
        }

        Task.create(newTask)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({massage: 'internal server error'})
        })
    }

    static showAll(req, res, next){
        Task.findAll()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(500).json({massage: 'internal server error'})
        })
    }

    static updateTask(req, res, next){
        const id = +req.params.id
        let UpdatedTask = {
            title: req.body.title,
            category: req.body.category,
            UserId: req.loggedInUser.id
        }

        Task.update(UpdatedTask, {
            where: {
                id
            }
        })
        .then(data => {
            res.status(200).json(UpdatedTask)
        })
        .catch(error => {
            res.status(500).json({massage: 'internal server error'})
        })
    }

    static editTask(req, res, next){
        const id = +req.params.id
        let UpdatedCategory = {
            category: req.body.category
        }

        Task.update(UpdatedCategory, {
            where: {
                id
            }
        })
        .then(data => {
            res.status(200).json(UpdatedCategory)
        })
        .catch(error => {
            res.status(500).json({massage: 'internal server error'})
        })
    }

    static delete(req, res, next){
        const id = +req.params.id
        Task.destroy({
            where: {
                id
            }
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(500).json({massage: 'internal server error'})
        })
    }

}

module.exports=TaskController