const {User} = require('../models')

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
            res.status(400).json({message: 'Invalid email or password!'})
        }
    }
}

module.exports = UserController