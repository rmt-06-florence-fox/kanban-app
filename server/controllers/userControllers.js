const { User } = require("../models/index")
var bcrypt = require('bcryptjs');
const { createToken } = require("../helpers/createAndVerifyToken")

class ControllerUser {
    static registerUser(req, res, next) {
        let objUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        }
        User.create(objUser)
            .then(data => {
                res.status(201).json({ name: data.fullName(), email: data.email, id: data.id })
            })
            .catch(err => {
                next(err)
            })
    }

    static loginUser(req, res, next) {
        let email = req.body.email
        let password = req.body.password

        User.findOne({
            where: {
                email
            }
        })
            .then(data => {
                let dataBasePasswordUser = data.password
                console.log(dataBasePasswordUser)
                if(bcrypt.compareSync(password, dataBasePasswordUser)) {
                    let acces_token = createToken({ name: data.fullName(), email: data.email, id: data.id })
                    res.status(200).json({acces_token: acces_token})
                }else {
                    throw {
                        status: 400,
                        message: "Password/Email invalid"
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    }

}

module.exports = ControllerUser