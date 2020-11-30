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

}

module.exports = Controller