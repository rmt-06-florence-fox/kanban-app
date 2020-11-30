const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController{
    static async register(req, res, next){
        const payload = {
            email: req.body.email,
            password: req.body.password,
        }
        try {
            const user = await User.create(payload)
            console.log(user)
            res.status(201).json({id: user.id, email: user.email})
        } catch (error) {
            next(error)
        }
    }
    static async login(req, res, next){
        try {
            const dataUser = await User.findOne({where: {email: req.body.email}})
            if(!dataUser){
                throw {
                    status: 404,
                    msg: "User Not Found"
                }
            }
            else if(comparePassword(req.body.password, dataUser.password)){
                const access_token = generateToken({id: dataUser.id, email: dataUser.id})
                res.status(200).json({access_token})
            }
            else{
                res.send(401).json({})
            }
        } catch (error) {
            next(error)
        }
        
    }
}


module.exports = UserController