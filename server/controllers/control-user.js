const { User } = require ('../models')
const { checkHash, genToken } = require ('../helpers/helper')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.C_ID);

class ControllerUser {
    static async welcome (req ,res, next) {
        res.send('hello')
    }

    static async login (req ,res, next) {
        try {
            
            const comingUser = await User.findOne ({
                where: {
                    email: req.body.email
                }
            })
            if (comingUser) {
                if (checkHash(req.body.password, comingUser.password)) {
                    const access_token = genToken ({
                        id: comingUser.id,
                        username: comingUser.username,
                        email: comingUser.email,
                        OrganizationId: comingUser.OrganizationId
                    })
                    res.status(201).json({access_token})
                } else {
                    throw ({
                        status: 400,
                        message: `Email/Password don't match`})
                }
            } else {
                throw ({
                    status: 400,
                    message: `Email/Password don't match`})
            }
        } catch (err) {
            next(err)
        }
    }

    static async register (req ,res, next) {
        try {
            const newUser = await User.create (req.body)
            const access_token = genToken ({
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
                
            })
            res.status(200).json({access_token})
        } catch (err) {
            next(err)
        }
    }

    static async getUser (req, res, next) {
        try {
            const user = await User.findOne({
                where: {
                    id: req.loggedUser.id
                }
            })
            res.status(201).json({id: user.id, username: user.username, OrganizationId: user.OrganizationId})
        } catch (err) {
            next(err)
        }
    }

    static async patchOrg (req, res, next) {
        try {
            const updateData = await User.update(req.body, {
                where: {
                    id: req.loggedUser.id
                },
                returning:true
            })
            
            const access_token = genToken ({
                id: updateData[1][0].id,
                username: updateData[1][0].username,
                email: updateData[1][0].email,
                OrganizationId: updateData[1][0].OrganizationId
            })
            console.log(updateData[1][0].OrganizationId)
            res.status(200).json({access_token, updateData})
        } catch (err) {

        }
    }


    static async google (req, res, next) {
        try {
            const ticket = await client.verifyIdToken({
                idToken: req.body.id_token,
                audience: process.env.C_ID,  // Specify the CLIENT_ID of the app that accesses the backend
                // Or, if multiple clients access the backend:
                //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
            });
            const payload = ticket.getPayload();
            const userid = payload['sub'];
            const checkUser = await User.findOne ({
				where: {
					email: payload.email
				}
			})
			if(checkUser) {
				const access_token = genToken({
					id: checkUser.id,
                    username: checkUser.username,
                    email: checkUser.email,
                    OrganizationId: checkUser.OrganizationId
				});
				res.status(201).json({ access_token });
			} else {
				const userData = {
                    username: `${payload.given_name}_${payload.family_name}`,
                    email: payload.email,
                    password: process.env.PASS
				}
				const newUser = await User.create(userData);
				const access_token = genToken({
                    id: newUser.id,
                    username: newUser.username,
                    email: newUser.email,
			});
            res.status(201).json({ access_token });
            console.log(access_token)
			}
        } catch (err) {
            next (err)
        }
    }

}


module.exports = ControllerUser