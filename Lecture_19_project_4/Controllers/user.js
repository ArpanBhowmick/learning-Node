import { User } from "../Model/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"



    // User register

export const register = async (req, res) => {
         const {name, email, password} = req.body

         if(!name || !email || !password) return res.json({message: "All fields are required"})

          let user = await User.findOne({email})
          
          if(user) return res.json({message: "User Already exists", success: false })

            const hashPassword = await bcrypt.hash(password, 10)
         
           user = await User.create({name, email, password: hashPassword})
       
        res.json({message: "user created successfully", data: req.body, success: true, user})
      }



      // User Login 

      export const login = async (req, res) => {
        const {email, password} = req.body

        if(!email || !password) 
          return res.json({message: "All correct fields are required"});

        const user = await User.findOne({ email });

        if(!user) return res.json({ message: "user not exist", success: false })

        const validPassword = await bcrypt.compare(password, user.password);

        if(!validPassword) return res.json({message: "Inalid password", success: false })

          const token = jwt.sign({userId: user._id}, "!@#$%^&*()", {expiresIn: "1d"})

          res.json({message: `Welcome ${user.name}`,token, success: true })
      }