import { User } from "../models/index.js"
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs"

class userController {
     
    async signup(req,res){
        let { name, surname, username, password } = req.body
        try{
           if(!name || !surname || !username || !password){
               return res.status(400).send({message: "All fields are required!!"})
           }
           
           password = await bcrypt.hash(password,10)

           const user = await User.create({ name, surname, username, password })
           return res.status(200).send({ok: true, _id: user._id})
        }catch(err){
            return res.status(400).send({message: err.message})
        }
    }
    
    async login(req,res){
        let { username, password } = req.body
        try{
            if(!username || !password){
                return res.status(401).send({message: "Password and Username are required"})
            }

            const user = await User.findOne({username})
            if(!user){
                return res.status(401).send({message: "User is not found!"})
            }

            const valid = await bcrypt.compare(password, user.password)
            if(!valid){
                return res.status(401).send({message: "Invalid credentials!"})
            }

            const token = jwt.sign(
                { id: user._id, username: username},
                process.env.JWT_SECRET,
                { expiresIn:"7d"}
            )

            return res.status(201).send({ok: true, token})
        }catch(err){
            return res.status(400).send({message: err.message})
        }
    }
}

export default new userController()