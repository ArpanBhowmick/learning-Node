import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.urlencoded({extended:true}))

mongoose
  .connect(
    "mongodb+srv://arpanbhowmick28_db_user:MBJdXXZhBVOMd0nV@cluster0.bucfb7i.mongodb.net/",
    { dbName: "NodeJs Mastery course" }
  )
  .then(() => console.log("mongoDB connected.!"))
  .catch((err) => console.log(err));


  app.get("/", (req, res) =>{
    res.render("index.ejs")
  })

const port = 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));
