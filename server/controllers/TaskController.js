const { static } = require('express')
const {Task, User, Category, Organization} = require('../models/index')

class TaskController {
    static async createTask(req, res, next){
        try {
            let obj = {
                title: req.body.title,
                OrganizationId: req.body.OrganizationId,
                CategoryId: req.body.CategoryId,
                UserId:req.userLoggedIn.id 
            }
            let data = await Task.create(obj)
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
    static async getTask(req, res, next){
        try {
            let data = await Task.findAll()
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }

    }

    static async getTaskById(req, res, next){
        try {
            let id = req.params.id
            let data = await Task.findByPk(id)
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
    static async modifyTask(req, res, next){
        try {
            let id = req.params.id
            let obj = {
                title: req.body.title,
                OrganizationId: req.body.OrganizationId,
                CategoryId: req.body.CategoryId,
                UserId:req.userLoggedIn.id 
            }
            let data = await Task.update(obj, {
                where: {
                    id
                },
                returning: true
            })
            res.status(200).json(data[1])
        } catch (error) {
            next(error)
        }

    }
    static async updateTask(req, res, next){
        try {
            let id = req.params.id
            let data = await Task.update({CategoryId: req.body.CategoryId}, {
                where: {
                    id
                },
                returning: true
            })
            res.status(200).json(data[1])
        } catch (error) {
            next(error)
        }

    }
    static async deleteTask(req, res, next){
        try {
            let id = req.params.id
            let data = await Task.destroy({
                where: {
                    id
                }
            })
            res.status(200).json({message: `delete success`})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = TaskController