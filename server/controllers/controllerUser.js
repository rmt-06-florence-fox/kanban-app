const { User } = require("../models")
const { compare } = require("../helpers/bcrypt")
const { generateToken } = require("../helpers/jwt")


class ControllerUser {
    static register(req,res,next){
        console.log("masuk register 1")
        const obj = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        console.log(obj)
        User.create(obj)
        .then(data => {
            console.log("masuk register")
            res.status(201).json({
                id: data.id,
                name: data.name,
                email: data.email,
                password: data.password
            })
        })
        .catch(error => {
            console.log("masuk eror")
            next(error)
        })
    }

    static findUser(req,res,next){
        console.log(req.headers.id)
        User.findAll({where: {id: req.headers.id}})
        .then(data => {        
            if(data) {
                console.log(data.User.name)
                res.status(200).json(
                    {name: data.name}
                )
            } else {
                throw{
                    status: 404,
                    message: 'user tidak ada'
                }
            }
        })
        .catch(error => {
            next(error)
        })
    }

    static login(req,res,next){
        console.log(req.body)
        User.findOne({where: {email: req.body.email}})
        .then(data => {        
            if(data) {
                if(compare(req.body.password, data.password)){
                    const access_token = generateToken({id: data.id, email: data.email})
                    res.status(200).json( {access_token} )
                    
                } else {
                    throw{
                        status: 404,
                        message: 'email/password salah'
                    }
                }
            } else {
                throw{
                    status: 404,
                    message: 'email/password salah'
                }
            }
        })
        .catch(error => {
            console.log(error)
            next(error)
        })
    }
}

module.exports = ControllerUser