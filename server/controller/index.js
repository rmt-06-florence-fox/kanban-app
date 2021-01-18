const {User, Task} = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { patch } = require('../routes')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);




class Controller {

    static login(req, res, next){
        User.findOne({
            where:{
                email: req.body.email
            }
        })
        .then(user =>{
            if(!user){
                res.status(401).json({message: 'Invalid Account bro/sis'})
            } else {
                if(bcrypt.compareSync(req.body.password, user.password)){
                    let access_token = jwt.sign({id: user.id, email: user.email}, process.env.SECRET)
                    res.status(200).json({access_token})
                }

            }
        })
        .catch(err =>{
            res.status(500).json({message: 'Internal Server Error'})
        })
    }

    static googleLogin(req, res){
        let payLoad ;
        client.verifyIdToken({
            idToken: req.body.googleToken,
            audience: process.env.GOOGLE_CLIENT_ID
        })
        .then(ticket =>{
            payLoad = ticket.getPayload()
           return User.findOne({
                where:{
                    email: payLoad.email
                }
            })
        })
        .then(result =>{

            if(result){
                return result
            } else {
                return User.create({
                    email: payLoad.email,
                    password: process.env.GOOGLE_PASSWORD
                })
            }
        })
        .then(user =>{
            console.log('masukkkkkk lagi', user)

            const access_token = jwt.sign({id: user.id, email: user.email}, process.env.SECRET)
            res.status(200).json({access_token})
    
        })
        .catch(err =>{
            res.status(500).json({message: 'Internal Server Error'})
        })
    }

    static register(req, res){
        let newUser = {
            email: req.body.email,
            password: req.body.password
        }
        User.create(newUser)
        .then(user =>{
            res.status(201).json({user})
        })
        .catch(err =>{
            res.status(500).json({message: 'Internal Server Error'})
        })
    }
    static showTask(req, res ) {
        Task.findAll({
            include:[User]
        })
        .then(task =>{
            res.status(200).json(task)
        })
        .catch(err =>{
            res.status(500).json({message: 'Internal Server Error'})
        })
    }
    static newTask(req, res){
        let newData = {
            title: req.body.title,
            category: req.body.category,
            UserId: req.loggedIn.id
        }
        Task.create(newData)
        .then(task =>{
            res.status(201).json(task)
        })
        .catch(err =>{
            res.status(500).json({message: 'Internal Server Error'})
        })
    }
    static editTask(req, res) {
        let editedData = {
            title: req.body.title,
            category: req.body.category,
        }
        Task.update(editedData, {
            where:{
                id: req.params.id
            },
            returning : true
        })
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(err =>{
            res.status(500).json({message: 'Internal Server Error'})
        })
    }
    static patchTask(req, res) {
        let patchData = {
            category: req.body.category,
        }
        Task.update(patchData, {
            where:{
                id: req.params.id
            },
            returning : true
        })
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(err =>{
            res.status(500).json({message: 'Internal Server Error'})
        })
    }
    static destroyTask(req, res) {
        Task.destroy({
            where:{
                id : req.params.id
            }
        })
        .then(data =>{
            res.status(200).json({message: 'deleted'})
        })
        .catch(err =>{
            res.status(500).json({message: 'Internal Server Error'})
        })
    }
}



module.exports = Controller
