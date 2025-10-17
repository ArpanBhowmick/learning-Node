import express from "express";
import mongoose from "mongoose";

const app = express();
mongoose.connect(
  "mongodb+srv://arpanbhowmick28_db_user:MBJdXXZhBVOMd0nV@cluster0.bucfb7i.mongodb.net/", {
    dbName: "NodeJs Mastery Course"
  }
).then(()=> console.log("MongoDB connected..!")).catch((err)=> console.log(err))

const port = 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));
