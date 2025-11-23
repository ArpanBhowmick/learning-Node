import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import bodyParser from "express"
import userRouter from "./Routes/user.js"
import contactRouter from "./Routes/contact.js"


const app = express();

app.use(bodyParser.json())

// user Router 
app.use("/api/user", userRouter)

// contact Router
app.use("/api/contact", contactRouter)

let PORT = process.env.PORT;

// middleware in Express.js used to parse the body of incoming HTTP requests When you send data (like JSON, form data, etc.) from the frontend or Postman to your backend, it comes as a raw stream of bytes. body-parser converts that raw data into a usable JavaScript object under req.body.


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


      
      
      



app.listen(PORT, ()=> console.log(`this server is running on port : ${PORT}`))











