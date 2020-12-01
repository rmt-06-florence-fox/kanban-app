const {User, Task} = require('../models')
const {checkPassword} = require('../helpers/bcryptjs')
const {generateToken} = require('../helpers/jwt')

class Controller {

    static async register(req, res, next){
        try {
            let data = {
                email : req.body.email,
                password : req.body.password
            }
            const newUser = await User.create(data)
            res.status(201).json({
                id : newUser.id,
                email : newUser.email
            })
        } catch (err) {
            next(err)
        }
    }

    static async login(req, res, next){
        try {
            let data = {
                email : req.body.email,
                password : req.body.password
            }
            const findUser = await User.findOne({where : {email : data.email}})
            if(checkPassword(data.password, findUser.password)){
                let access_token = generateToken({
                    id : findUser.id,
                    email : findUser.email
                })
                res.status(200).json({access_token})
            } else {
                throw {
                    status : 404,
                    message : 'data not found'
                }
            }
        } catch (err) {
            next(err)
        }
    }

    static async createTask(req, res, next){
        try {
            let data = {
                title : req.body.title,
                category : req.body.category
            }
            const newTask = await Task.create(data)
            res.status(200).json(newTask)
        } catch (err) {
            next(err)
        }
    }

    static async listTask(req, res, next){
        try {
            const data = await Task.findAll()
            res.status(200).json(data)
        } catch (err) {
            next(err)
        }
    }

    static async editTask(req, res, next){
        try {
            let id = req.params.id
            let data = {
                title : req.body.title,
                category : req.body.category
            }
            const user = await Task.findByPk(id)
            if (!user){
                throw {
                    status : 404,
                    message : 'data not found'
                }
            } else {
                const newTask = await Task.update(data, {where : {id}, returning : true})
                res.status(200).json(newTask)
            }
        } catch (err) {
            next(err)
        }
    }

    static async deleteTask(req, res, next){
        try {
            let id = req.params.id
            const data = await Task.destroy({where : {id}})
            res.status(200).json('Success to delete')
        } catch (err) {
            next(err)
        }
    }

    static async findById(req, res, next){
        try {
            let id = req.params.id
            const data = await Task.findByPk(id)
            res.status(200).json(data)
        } catch (err) {
            next(err)
        }
    }

}

module.exports = Controller