import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import { v2 as cloudinary } from 'cloudinary';
import path from "path"


const app = express();
const PORT = 5000;

// Configuration
    cloudinary.config({ 
        cloud_name: 'dy6wqev49', 
        api_key: '224341172399464', 
        api_secret: "d2llkZbkBBZyE7khaJIJk7vmcn0", 
    });

mongoose
  .connect(
    "mongodb+srv://arpanbhowmick28_db_user:NU2kteuhAl0p7Dgd@cluster0.8olw0t0.mongodb.net/",
    {
      dbName: "Image_Uploader_Project",
    }
  )
  .then(() => console.log("MongoDb Connected...!"))
  .catch((err) => console.log(err));


//   rendering ejs file 
app.get("/", (req, res) => {
    res.render("index.ejs", {url: null} )
})




const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })


const imageSchema = new mongoose.Schema({
    fileName: String,
    public_id: String,
    imgUrl: String
})

const File = mongoose.model("cloudinary", imageSchema)



app.post('/upload', upload.single('file'), async (req, res) => {
  const file = req.file.path

  const  cloudinaryRes = await cloudinary.uploader.upload(file, {folder: "nodeJS_Mastery_Course",})

  // save to database 
  const db = await File.create({
    fileName: file.originalname,
    public_id: cloudinaryRes.public_id,
    imgUrl: cloudinaryRes.secure_url
  })

  res.render("index.ejs", {url: cloudinaryRes.secure_url})

  // res.json({message: "file uploaded successfully", cloudinaryRes})
})




app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));
