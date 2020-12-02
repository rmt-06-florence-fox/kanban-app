const {Task} = require("../models/index")

class TaskController{
    static getTasks(req, res, next){
        Task.findAll({
            where:{
                UserId: req.loginUser.id
            }
        })
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(e=>{
            next(e)
        })
    }
    static addTask(req, res, next){
        const obj = {
            title: req.body.title,
            category: req.body.category,
            desc: req.body.desc,
            UserId: req.loginUser.id
        }
        Task.create(obj)
        .then(data=>{
            res.status(201).json(data)
        })
        .catch(e=>{
            next(e)
        })
    }
    static editTask(req, res, next){
        const id = req.params.id
        const obj = {
            title: req.body.title,
            category: req.body.category,
            desc: req.body.desc,
            UserId: req.loginUser.id
        }
        Task.update(obj, {
            where:{
                id
            },
            returning: true
        })
        .then(data=>{
            if(!data || data[0]==0){
                throw {
                    status: 404,
                    message: `data not found`
                }
            } else {
                res.status(200).json(data[1][0])
            }
        })
        .catch(e=>{
            next(e)
        })
    }
    static filterId(req, res, next){
        const id = req.params.id
        Task.findByPk(id)
        .then(data=>{
            if(!data){
                throw{
                    status: 404,
                    message: `data not found`
                }
            } else {
                res.status(200).json(data)
            }
        })
        .catch(e=>{
            next(e)
        })
    }
}

module.exports = TaskController