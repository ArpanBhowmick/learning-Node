import express from "express"
import { v2 as cloudinary } from 'cloudinary';
import mongoose from "mongoose";
import multer from "multer";
import { uploadImage } from "./Controller/uploadController.js";
import path from "path"
import "dotenv/config";



const app = express();
const PORT = process.env.PORT || 5000;


    // Configuration
    cloudinary.config({ 
        cloud_name: 'dy6wqev49', 
        api_key: '224341172399464', 
        api_secret: '<your_api_secret>' 
    });


    mongoose
      .connect(
        process.env.MONGO_URL,
        {
          dbName: "Full_Stack_Authentication_With_File_Upload",
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

app.get("/", (req, res) =>{
    res.render("login.ejs", {url: null})
})


app.post("/upload", upload.single("file"), uploadImage)


app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));








