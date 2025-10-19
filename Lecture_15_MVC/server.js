import express from "express";
import mongoose from "mongoose";
import { userRegister } from "./controllers/user.js";


const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://arpanbhowmick28_db_user:MBJdXXZhBVOMd0nV@cluster0.bucfb7i.mongodb.net/",
    { dbName: "NodeJs_Mastery_course" }
  )
  .then(() => console.log("mongoDB connected.!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/form-submit", userRegister);

app.listen(port, () => console.log(`server is running on port ${port}`));
