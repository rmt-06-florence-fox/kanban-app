const {User} = require("../models/index")
const Helper = require("../helper/Helper")
const bcrypt = require('bcryptjs')

class UserController{
    static register(req, res){
        const obj = {
            email: req.body.email,
            password: req.body.password
        }
        User.create(obj)
        .then(data=>{
            res.status(201).json({email: data.email, password: data.password})
        })
        .catch(e=>{
            console.log(e)
            res.status(500).json({message: `internal server error`})
        })
    }

    static login(req, res){
        User.findOne({
            where:{
                email: req.body.email
            }
        })
        .then(data=>{
            if(!data){
                res.status(401).json({message: 'invalid account'})
            } else if(bcrypt.compareSync(req.body.password, data.password)){
                const access_token = Helper.generateToken({email: data.email, password: data.password, id: data.id})
                console.log(access_token)
                res.status(200).json({access_token})
            } else {
                res.status(401).json({message: 'invalid email/password'})
            }
        })
        .catch(e=>{
            console.log(e)
            res.status(500).json({message: 'internal server error'})
        })
    }
}

module.exports = UserController