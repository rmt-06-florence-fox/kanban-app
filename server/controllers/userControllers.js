const { User } = require("../models/index")
var bcrypt = require('bcryptjs');
const { createToken } = require("../helpers/createAndVerifyToken")

class ControllerUser {
    static registerUser(req, res) {
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
                res.status(500).json({ error: err })
            })
    }

    static loginUser(req, res) {
        let email = req.body.email
        // console.log(email)
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
                    res.status(400).json({ error: "Password/Email invalid"})
                }
            })
            .catch(err => {
                res.status(500).json({ error: "Password/Email invalid"})
            })
    }

}

module.exports = ControllerUser