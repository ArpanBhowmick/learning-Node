import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import bodyParser from "express"
import { User } from "./Model/User.js";
import bcrypt from "bcryptjs"


const app = express();

let PORT = process.env.PORT;

// middleware in Express.js used to parse the body of incoming HTTP requests When you send data (like JSON, form data, etc.) from the frontend or Postman to your backend, it comes as a raw stream of bytes. body-parser converts that raw data into a usable JavaScript object under req.body.
app.use(bodyParser.json())

   mongoose
      .connect(
        process.env.MONGO_URL,
        {
          dbName: "ContactAuth",
        }
      )
      .then(() => console.log("MongoDb Connected...!"))
      .catch((err) => console.log(err));



      // Home route
      app.get("/", (req, res)=> {
        res.json({message : "this is home route working"})
      })


      // user Routes 
      // @api Name :- user Register
      // @api method:-post
      // @api endpoint :- /api/user/register
      app.post("/api/user/register", async (req, res) => {
         const {name, email, password} = req.body

         if(!name || !email || !password) return res.json({message: "All fields are required"})

          let user = await User.findOne({email})
          
          if(user) return res.json({message: "User Already exists", success: false })

            const hashPassword = await bcrypt.hash(password, 10)
         
           user = await User.create({name, email, password: hashPassword})
       
        res.json({message: "user created successfully", data: req.body, success: true, user})
      })



app.listen(PORT, ()=> console.log(`this server is running on port : ${PORT}`))











