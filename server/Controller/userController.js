const {User} = require('../models')
const {comparePassword} = require('../midlleware/helper-bcrypt')
const {generateToken} = require('../midlleware/helper-jwt')

class UserController {

    static async register(req, res) {
        try {
            let newUser = {
                email: req.body.email,
                password: req.body.password
            }
            const data = await User.create(newUser)
            res.status(201).json({id: data.id, email: data.email})
        } catch (error) {
            res.status(400).json({message: 'Invalid email or password, email must be unique!'})
        }
    }

    static async login(req, res) {
        try {
            const data = await User.findOne({
                where: {
                    email: req.body.email
                }
            })
            if(!data) res.status(404).json({message: "Invalid email or password"})
            else {
                if(comparePassword(req.body.password, data.password)) {
                    const access_token = generateToken({id: data.id, email: data.email})
                    res.status(200).json({access_token})
                } else {
                    res.status(400).json({message: "Invalid email or password"})
                }
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = UserController