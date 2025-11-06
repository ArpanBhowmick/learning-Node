import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import { v2 as cloudinary } from 'cloudinary';
import path from "path"
import "dotenv/config";
import File from "./model/File.js";



const app = express();
const PORT = process.env.PORT || 5000;

// Configuration
// This connects your backend to your Cloudinary account.
    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.API_KEY, 
        api_secret: process.env.API_SECRET, 
    });

mongoose
  .connect(
    process.env.MONGO_URL,
    {
      dbName: "Image_Uploader_Project",
    }
  )
  .then(() => console.log("MongoDb Connected...!"))
  .catch((err) => console.log(err));


//   rendering ejs file 
// Loads the main upload page and sends url: null because no image yet.
app.get("/", (req, res) => {
    res.render("index.ejs", {url: null} )
})




// Multer Storage Engine
// What this does:
// Saves uploaded file temporarily in public/uploads
// Gives the file a unique name based on time
// file.fieldname = "file" (your input name)
// path.extname extracts .png, .jpg, etc.

const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix)
  }
})

// Multer Upload Middleware
// This creates the upload function that you use inside your POST route.
const upload = multer({ storage: storage })



// Mongoose Schema
// This defines what will be saved in the database:
// fileName → original filename
// public_id → cloudinary file ID
// imgUrl → the final Cloudinary URL

// const imageSchema = new mongoose.Schema({
//     fileName: String,
//     public_id: String,
//     imgUrl: String
// })

// Model
// Creates collection named cloudinaries (auto plural).

// const File = mongoose.model("cloudinary", imageSchema)


// Upload Route
// upload.single("file") means your form has: <input type="file" name="file">
// Multer saves the file and attaches info in req.file
app.post('/upload', upload.single('file'), async (req, res) => {
  try {

    // req.file.path gives local path like: public/uploads/file-169938234232.jpg

  const file = req.file.path

// Upload to Cloudinary
// This sends file → Cloudinary
// Returns:
          // secure_url
          // public_id
          // format
          // size
          // etc.

  const  cloudinaryRes = await cloudinary.uploader.upload(file, {folder: "nodeJS_Mastery_Course",})

  // Save to Database
  
   // Stores:
            // filename
            // Cloudinary’s public ID
            // Live image URL
  const db = await File.create({
    fileName: req.file.originalname,
    public_id: cloudinaryRes.public_id,
    imgUrl: cloudinaryRes.secure_url,
  })
  
   // Render Page with Image
//  Reloads the page and shows the uploaded image.
  res.render("index.ejs", {url: cloudinaryRes.secure_url});
  } catch (err) {
    
  }
  

 

  // res.json({message: "file uploaded successfully", cloudinaryRes})
})




app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));
