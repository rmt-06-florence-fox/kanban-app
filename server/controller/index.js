const {User, Task} = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


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
            res.status(500).json(err)
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
            res.status(500).json({err})
        })
    }
}



module.exports = Controller
