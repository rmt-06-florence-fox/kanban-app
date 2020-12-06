const { User, Task } = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const axios = require('axios')


class Controller {
    static register(req, res, next) {
        console.log('masuk');
        let obj = {
            email: req.body.email,
            password: req.body.password
        }

        User.create(obj)
        .then( data => {
        //    res.status(201).json({id: data.id, email: data.email})
           return User.findOne({where: {email: req.body.email}})
        })
        .then( user => {
            // console.log(user.id, user.email);
            const access_token = jwt.sign({ id: user.id, email: user.email }, 'hiha');
            if(bcrypt.compareSync(req.body.password, user.password)) {
                // console.log(access_token);
                res.status(200).json({access_token})
            } else {
                res.status(401).json('Can not find your account')
            }
        })
        .catch(err => {
            next(err)
            
        })
    }

    static login(req, res, next) {
        User.findOne({where: {email: req.body.email}})
        .then( data => {
            const access_token = jwt.sign({ id: data.id, email: data.email }, 'hiha');
            if(bcrypt.compareSync(req.body.password, data.password)) {
                res.status(200).json({access_token})
            } else {
                res.status(401).json('Can not find your account')
            }
        })
        .catch(err => {
            res.status(401).json('Can not find your account')
        })

    }

    static addTasks(req, res, next) {
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
            next(err)
        })
    }
    
    static taskList(req, res, next) {
        Task.findAll()
        .then( data => {
            res.status(200).json({data})
        })
        .catch(err => {
            next(err)
        })
    }

    static patchTask(req, res, next) {
        let obj = {
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
            next(err)
        })
    }

    static updateTask(req, res, next) {
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
            next(err)
        })
    }

    static deleteTask(req, res, next) {
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
            next(err)
        })
    }
}

module.exports = Controller