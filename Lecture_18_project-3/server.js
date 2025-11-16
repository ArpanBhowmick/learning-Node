import express from "express"
import { v2 as cloudinary } from 'cloudinary';
import mongoose from "mongoose";
import multer from "multer";
import { login, uploadImage } from "./Controller/uploadController.js";
import path from "path"
import "dotenv/config";



const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.urlencoded({ extended: true }));



    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.API_KEY, 
        api_secret: process.env.API_SECRET, 
    });


    mongoose
      .connect(
        process.env.MONGO_URL,
        {
          dbName: "Authentication_With_File_Upload",
        }
      )
      .then(() => console.log("MongoDb Connected...!"))
      .catch((err) => console.log(err));
    


    // Multer Storage Engine
      const storage = multer.diskStorage({
        destination: "./public/uploads",
        filename: function (req, file, cb) {
          const uniqueSuffix = Date.now() + path.extname(file.originalname);
          cb(null, file.fieldname + "-" + uniqueSuffix)
        }
      })


// Multer Upload Middleware
const upload = multer({ storage: storage })


// rendering login.ejs
app.get("/", (req, res) =>{
    res.render("login.ejs", {url: null})
})


// rendering register.ejs
app.get("/register", (req, res) => {
  res.render("register.ejs", )
})


app.post("/register", upload.single("file"), uploadImage)
app.post("/login", login)


app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));








