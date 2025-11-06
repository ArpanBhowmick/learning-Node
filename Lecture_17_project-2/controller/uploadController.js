import { v2 as cloudinary } from 'cloudinary';
import File from "../model/File.js";


export const uploadImage = async(req, res) => {
    try {

        // req.file.path gives local path like: public/uploads/file-169938234232.jpg
        const filePath = req.file.path;


        // Upload to Cloudinary
// This sends file → Cloudinary
// Returns:
          // secure_url
          // public_id
          // format
          // size
          // etc.

        const  cloudinaryRes = await cloudinary.uploader.upload(filePath, {folder: "nodeJS_Mastery_Course"});

        // Save to Database

        // Stores:
            // filename
            // Cloudinary’s public ID
            // Live image URL


             const db = await File.create({
                fileName: req.file.originalname,
                public_id: cloudinaryRes.public_id,
                imgUrl: cloudinaryRes.secure_url,
              });

            // Render Page with Image
            //  Reloads the page and shows the uploaded image.

               res.render("index.ejs", {url: cloudinaryRes.secure_url});


    } catch (err) {
        res.status(500).send("Upload failed");
    }
}










// Purpose: Contains the business logic for uploading images.

// Contains: 
// Cloudinary upload logic (cloudinary.uploader.upload(...))
// Saving image data to MongoDB (File.create(...))
// Rendering response or sending JSON
// Error handling