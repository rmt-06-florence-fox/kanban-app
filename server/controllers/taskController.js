const { Task } = require('../models')



class TaskController{
    static async postTask(req,res,next){
        let obj = {
            state: req.body.state,
            title: req.body.title,
            due_date: req.body.due_date,
            UserId: req.loggedInUser.id
        }
        try {
            let newTask = await Task.create(obj)
            res.status(201).json({newTask})
        } catch (err) {
            next(err)
        }
    }
    static async getTask(req,res,next){
        try {
            let allTask = await Task.findAll({
                order:[['id' , 'ASC']]
            })
            res.status(200).json({allTask})
        } catch (err) {
            next(err)
        }
    }
    static async getTaskId(req,res,next){
        let id = req.params.id
        try {
            let oneTask = await Task.findOne({
                where:{
                    id: id
                }
            })
            if(oneTask){
                res.status(200).json({oneTask})
            }else{
                throw{
                    status: 404,
                    msg: 'task not found'
                }
            }
        } catch (err) {
            next(err)
        }
    }
    static async putTask(req,res,next){
        let id = req.params.id
        let obj = {
            state: req.body.state,
            title: req.body.title
        }
        try {
            let editedTask = await Task.update(obj,{
                where: {
                    id:id
                },
                returning: true
            })
            res.status(200).json({editedTask})
        } catch (err) {
            next(err)
        }
    }
    static async patchTask(req,res,next){
        let id = req.params.id
        let obj = {
            state: req.body.state
        }
        try {
            let patchedTask = await Task.update(obj,{
                where:{
                    id:id
                },
                returning: true
            })
            res.status(200).json({patchedTask})
        } catch (err) {
            next(err)
        }
    }
    static async deleteTask(req,res,next){
        let id = req.params.id
        try {
            let deletedTask = await Task.destroy({
                where:{
                    id:id
                }
            })
            res.status(200).json({msg: 'task deleted'})
        } catch (err) {
            next(err)
        }
    }
}

module.exports = TaskController