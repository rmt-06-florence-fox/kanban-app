const {User} = require('../models')
const {comparePassword} = require('../helpers/bcrypt')
const {signToken} = require('../helpers/jwt')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const createError = require('http-errors')

class UserController {
	static async register(req, res, next) {
		try {
			const { email, password } = req.body
			const user = await User.create({ email, password })
			res.status(201).json({ id: user.id, email: user.email })
		} catch (error) {
			next(error)
		}
	}

	static async login(req, res, next) {
		try {
			const {email, password} = req.body
			const user = await User.findOne({where: {email}})

			if (!user || !comparePassword(password, user.password)) {
				throw createError(400, 'username or password is incorrect')
			} else {
				const payload = {id: user.id, email: user.email}
				const token = signToken(payload)
				res.status(200).json({access_token: token})
			}
		} catch (error) {
			next(error)
		}
	}

	static googleSignIn(req, res, next) {
		//verify access token
		//dapetin token dari client
		let { google_access_token } = req.body
		const client = new OAuth2Client(process.env.CLIENT_ID);
		let email = null;
		//verify google token berdasarkan client id
		//kembalikan token google seperti token biasa agar dapat di autentikasi server
		client.verifyIdToken({
				idToken: google_access_token,
				audience: process.env.CLIENT_ID
		})
		.then(ticket => {
				let payload = ticket.getPayload();
				email = payload.email
				return User.findOne({
						where:{
								email: payload.email
						}
				})
 
		})
		.then(user => {
				if(user) {
						return user;
 
				} else {
						let newUser = {
								email: email,
								password: process.env.ID_PASS,
								username: email.substring(0,email.indexOf('@'))
						}
						return User.create(newUser)
				}
		})
		.then(dataUser =>{
				let access_token =  signToken({
						id: dataUser.id,
						email: dataUser.email,
						username: dataUser.username
				})
				return res.status(200).json({ access_token })
		})
		.catch(err => {
				console.log(err);
		})
}
}
module.exports = UserController
