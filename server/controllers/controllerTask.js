const { Task } = require('../models')

class ControllerTask {

    static createTask(req,res,next){
        const obj = {
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            UserId: req.loggedInUser.id
        }
        Task.create(obj)
        .then(data => {
            res.status(201).json({
                name: data.name,
                description: data.description,
                category: data.category,
                UserId: data.loggedInUser.id
            })
        })
        .catch(error => {
            next(error)
        })
    }

    static listTask(req,res,next){
        Task.findAll()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            next(error)
        })
    }

    static editCategory(req,res,next){
        Task.update({
            category: req.body.category
        },{where: {id: req.params.id}})
        .then(data => {
            if(data){
                return Task.findOne({where: {id: req.params.id}})
                .then(data2 => {
                    res.status(201).json({
                        name: data2.name,
                        description: data2.description,
                        category: data2.category,
                        UserId: data2.UserId
                    })
                })
            } else {
                throw {
                    status: 404,
                    message: 'task not found'
                }
            }
        })
        .catch(error => {
            next(error)
        })
    }

    static editTask(req,res,next){
        Task.update({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            UserId: req.body.UserId
        },{where: {id: req.params.id}})
        .then(data => {
            if(data){
                return Task.findOne({where: {id: req.params.id}})
                .then(data2 => {
                    res.status(201).json({
                        name: data2.name,
                        description: data2.description,
                        category: data2.category,
                        UserId: data2.UserId
                    })
                })
            } else {
                throw {
                    status: 404,
                    message: 'task not found'
                }
            }
        })
        .catch(error => {
            next(error)
        })
    }

    static deleteTask(req,res,next){
        Task.destroy({where: {id: req.params.id}})
        .then(data => {
            if(data){
                res.status(200).json({message: 'task deleted'})
            } else {
                throw {
                    status: 404, 
                    message: 'task non found'
                }
            }
        })
        .catch(error => {
            next(error)
        })
    }


}


module.exports = ControllerTask