const { User } = require("../models")
const { comparePass } = require("../helpers/hash")
const { generateToken } = require("../helpers/jwt")

class Controller {
    static async register(req, res, next) {
        try {
            const { name, email, password } = req.body
            const input = { name, email, password }
            const user = await User.create(input)
            res.status(201).json({id: user.id, email: user.email})
        } catch (err) {
            next(err)
        }
    }
    static async login(req, res, next) {
        const { email, password } = req.body
        try {
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if(!user) {
                throw{
                    status: 400,
                    message: "invalid email or password"
                }
            } else if(comparePass(password, user.password)) {
                const payload = {
                    name: user.name,
                    id: user.id,
                    email: user.email
                }
                const access_token = generateToken(payload)
                res.status(200).json({ access_token })
            } else {
                throw{
                    status: 400,
                    message: "invalid email or password"
                }
            }
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Controller