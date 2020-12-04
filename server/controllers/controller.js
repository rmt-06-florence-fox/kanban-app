const { User, Task } = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const axios = require('axios')


class Controller {
    static register(req, res) {
        console.log('masuk');
        let obj = {
            email: req.body.email,
            password: req.body.password
        }

        User.create(obj)
        .then( data => {
           res.status(201).json({id: data.id, email: data.email})
            
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({err})
        })
    }

    static login(req, res) {
        User.findOne({where: {email: req.body.email}})
        .then( data => {
            const access_token = jwt.sign({ id: data.id, email: data.email }, 'hiha');
            if(bcrypt.compareSync(req.body.password, data.password)) {
                res.status(200).json({access_token})
            } else {
                console.log('ga nemu');
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({msg: 'Salah nih datanya'})
        })

    }

    static addTasks(req, res) {
        let obj = {
            title: req.body.title,
            category: req.body.category,
            UserId: req.loggedInUser.id
        }

        Task.create(obj)
        .then( data => {
            res.status(201).json({data})
        })
        .catch(err => {
            res.status(500).json({err})
        })
    }
    
    static taskList(req, res) {
        Task.findAll()
        .then( data => {
            res.status(200).json({data})
        })
        .catch(err => {
            res.status(500).json({err})
        })
    }


    static googleLogin(req, res, next) {
        let payload
        client.verifyIdToken({
            idToken: req.body.googleToken,
            audience: "994279102205-ha32cicdqvcdpmkggvbl5k2b58r03qar.apps.googleusercontent.com",
        })
        .then(ticket => {
            console.log('MASUK TICKET');
            payload = ticket.getPayload()
            return User.findOne({
                where: {
                    email: payload.email
                }
            })
        })
        .then(user => {
            if (user) {
                return user
            } else {
                console.log('MASUK CREATE')
                // console.log(payload);
                return User.create({
                    email: payload.email,
                    password: "-UmFTa8dEi8kUemEB99mPb3j",
                })
            }
        })
        .then(user => {
            console.log('MASUK FINAL');
            const access_token = jwt.sign({id: user.id, username: user.username, email: user.email}, 'hiha')
            res.status(200).json({access_token})
        })
        .catch(err => {
            console.log(err);
            next(err)
        })
    }


    static updateTask(req, res) {
        let obj = {
            title: req.body.title,
            category: req.body.category
        }
        let id = req.params.id
        Task.update(obj, {where: {id}})
        .then(data => {
            if (data != 0) {
                return Task.findOne({where: {id}})
            } else {
                res.status(401).json({msg: 'Ga ada datanya'})
            }
        })
        .then(result => {
            res.status(200).json({result})
        })
        .catch(err => {
            res.status(500).json({err})
        })
    }

    static deleteTask(req, res) {
        let id = req.params.id
        Task.destroy({where: {id}})
        .then(data => {
            if (data != 0) {
                res.status(200).json({msg: 'Task berhasil dihapus'})
            } else {
                res.status(401).json({msg: 'Tasks tidak ditemukan'})
            }
        })
        .catch(err => {
            res.status(500).json({err})
        })
    }
}

module.exports = Controller