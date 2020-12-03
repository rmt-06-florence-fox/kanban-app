const { compareSync } = require('bcrypt')
const {Task,User,Category} = require('../models')


class TaskController {
    // Read All Task
    static  async getAllTask(req,res,next){
        console.log('=========== REad Task')
        console.log(req.loginUser)        
        try {
            
            const task = await Task.findAll({
                include : [User,Category]
            })
            console.log('=========== Try REad Task')
            console.log(task[0].dataValues)
            
            const data = task.map(el =>{
                console.log('==========loop')
                console.log(el.dataValues.Category)
                return {
                    id : el.dataValues.id,
                    title : el.dataValues.title,
                    CategoryId : el.dataValues.CategoryId,
                    createdAt : el.dataValues.createdAt,
                    updatedAt : el.dataValues.updatedAt,
                    User : el.dataValues.User.dataValues.email
                }
            })
            console.log('==get data')
            console.log(data)
            res.status(200).json({
                task : data
            })
            
        } catch (error) {
            console.log('=========== fail read Task')

            next(error)
        }
    }
    // Create New Task
    static async addNewTask (req,res,next){
        console.log('=========== Add Task')

        const userId = req.loginUser.id
        console.log(req.body)
        const newTask = {
            title : req.body.title,
            CategoryId : req.body.categoryId,
            UserId : userId,
        }
        console.log(newTask)
        try {
            console.log('===========Try Add Task')

            const addNewTask = await Task.create(newTask)
            console.log(addNewTask)
            res.status(200).json({
                newTask : addNewTask
            })
        } catch (error) {
            console.log('===========Fail Add Task')
            next(error)
        }
    }
    // Replace Task
    static async replaceTask(req,res,next){
        // const userId = req.loginUser.id
        console.log('=========== Replace Task')
        console.log(req.body)
        const taskId = req.params.id
        const editedTask = {
            title : req.body.title,
            Category : req.body.category
        }
        console.log(editedTask)
        try {
            console.log('=========== Try Replace Task')

            const saveEditedTask = await Task.update(editedTask, {
                where : {
                    id : taskId
                }
            })
            console.log(saveEditedTask)
            res.status(200).json({
                message : 'Succes Edit Task'
            })

        } catch (error) {
            console.log('===========Fail Replace Task')

            next(error)
        }
    }

    // Modified Task (hanya bisa mengedit category)
    static async modifiedTask(req,res,next){
        console.log('=========== Modified Task')
        const taskId = req.params.id
        const changedStatus = {
            Category : req.body.Category
        }

        try {
            console.log('=========== Try Modified Task')

            const saveModifiedTask = await Task.update(changedStatus, {
                where : {
                    id : taskId
                }
            })

            console.log(saveModifiedTask)
            res.status(200).json({
                mesage : 'Success Modified'
            })
        } catch (error) {
            console.log('=========== Fail Modified Task')

            next(error)
        }
    }

    static async destroyTask(req,res,next){
        console.log('============= Delete Task')
        const taskId = req.params.id
        console.log(taskId)

        try {
            console.log('============= Try Delete Task')

            const deletedTask = await Task.destroy({
                where : {
                    id : taskId
                }
            })
            console.log(deletedTask)
            if(deletedTask){
                res.status(200).json({
                    message : 'Succes Delete Task'
                })
            }else {
                throw {
                    code : 400,
                    message : 'Something Wrong When delete Task'
                }
            }
        } catch (error) {
        console.log('============= fail Delete Task')

            next(error)
        }
    }
}

module.exports = TaskController