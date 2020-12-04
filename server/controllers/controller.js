const {User} = require('../models/index')
const {compare} = require('../helpers/encryption')
const {tokenize} = require('../helpers/tokenization')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

class Controller {
   static async login(req,res){
      const payload = {
         email:req.body.email,
         password:req.body.password
      }

      try {
         let user = await User.findOne({where:{email:payload.email}})
         if(user){
            if(compare(payload.password,user.password)){
               const access_token = tokenize({id:user.id,email:user.email})
               res.status(200).json({access_token,userId:user.id})
            }else{
               throw({
                  status:400,
                  message:'Wrong email/password'
               })
            }
         }else{
            throw({
               status:400,
               message:'Wrong email/password'
            })
         }
      } catch (error) {
         if(error.status){
            res.status(error.status).json({message:error.message})
         }else if(error.name ==='SequelizeValidationError'){
            res.status(400).json({message:error.errors[0].message})
         }else{
            res.status(500).json({message:'Server Error'})
         }
      }

   }
   
   static async register(req,res){
      const payload = {
         email:req.body.email,
         password:req.body.password
      }

      try {
         let duplicate = await User.findOne({where:{email:payload.email}})
         if(duplicate)
            throw{
               status:400,
               message:'Email Already In Use!'
            }
         let user = await User.create(payload,{returning:true})
         res.status(201).json({data:user})
      } catch (error) {
         console.log(error.name);
         if(error.status){
            res.status(error.status).json({message:error.message})
         }else if(error.name ==='SequelizeValidationError'){
            res.status(400).json({message:error.errors[0].message})
         }else{
            res.status(500).json({message:'Server Error'})
         }
      }


   }

   static async googleLogin(req,res){
      const token = req.body.googleToken
      try {
         const ticket = await client.verifyIdToken({
            idToken:token,
            audience:process.env.GOOGLE_CLIENT_ID
         })
         const payload = ticket.getPayload()
         let user = await User.findOne({where:{email:payload.email}})
         if(!user){
            user = await User.create({
               email:payload.email,
               password:"slkfhjakfhskljafh"
            },{
               returning:true
            })
         }
         const access_token = tokenize({id:user.id,email:user.email})
         console.log(user)
         res.status(200).json({access_token,userId:user.id})
      } catch (error) {
         if(error.status){
            res.status(error.status).json({message:error.message})
         }else if(error.name ==='SequelizeValidationError'){
            res.status(400).json({message:error.errors[0].message})
         }else{
            res.status(500).json({message:'Server Error'})
         }
      }
   }
}

module.exports = Controller