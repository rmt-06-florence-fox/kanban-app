const {User} = require("../models/index")
const Helper = require("../helper/Helper")
const bcrypt = require('bcryptjs')

class UserController{
    static register(req, res, next){
        const obj = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password
        }
        User.create(obj)
        .then(data=>{
            res.status(201).json({email: data.email, id: data.id})
        })
        .catch(e=>{
            next(e)
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
                const access_token = Helper.generateToken({email: data.email, id: data.id})
                // console.log(access_token)
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