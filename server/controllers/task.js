const { Task } = require('../models/index')

class TaskController {
    
    static async getTaskById(req, res, next){
        const id = req.params.id
        try {
            const data = await Task.findByPk(id)
            if(data){
                res.status(200).json({task: data})
            }else{
                throw {
                    status: 404,
                    message: 'Data not found'
                }
            }
        } catch (error) {
            next(error)
        }
    }
    
    static async addTask(req, res, next){
        const newTask = {
            name: req.body.name,
            UserId: req.loggedInUser.id,
            CategoryId: req.body.CategoryId
        }
        try {
           const data = await Task.create(newTask)
           res.status(201).json(data) 
        } catch (error) {
            next(error)
        }
    }

    static async editTask(req, res, next){
        const id = req.params.id
        const updatedTask = {
            name: req.body.name,
            CategoryId: req.body.CategoryId
        }
        try {
            const data = await Task.update(updatedTask,{
                where:{
                    id: id
                },
                returning: true
            })
            if(data[1].length > 0){
                res.status(200).json(data[1][0])
            }else{
                throw {
                    status: 404,
                    message: 'Id not found'
                }
            }
        } catch (error) {
            next(error)
        }
    }

    static async editCategory(req, res, next){
        const id = req.params.id

        const updatedCategoryTask = {
            CategoryId: req.body.CategoryId
        }
        try {
            const data = await Task.update(updatedCategoryTask,{
                where:{
                    id: id
                },
                returning: true
            })
            if(data[1].length > 0){
                res.status(200).json(data[1][0])
            }else{
                throw {
                    status: 404,
                    message: 'Id not found'
                }
            }
        } catch (error) {
            next(error)
        }
    }

    static async deleteTask(req, res, next){
        const id = req.params.id
        console.log(req.loggedInUser)
        try {
            const data = await Task.destroy({
                where: {
                    id: id
                }
            })
            if(data){
                res.status(200).json({message: `Task success to delete`})
            }else{
                throw {
                    status: 404,
                    message: 'Id not found'
                }
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = TaskController