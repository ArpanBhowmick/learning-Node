
import { v2 as cloudinary } from 'cloudinary';
import File from '../Model/File.js';


export const uploadImage = async(req, res) => {
    try {
        const filePath = req.file.path;
        console.log(filePath);

        // Upload an image
     const uploadResult = await cloudinary.uploader
       .upload(filePath, {folder: "auth_uploads"});

        const db = await File.create({
            fileName:req.file.originalname,
            public_id:cloudinary.public_id,
            imgUrl:cloudinary.secure_url,
        })

        
    res.render("login.ejs", {url: secure_url})

       
    } catch (err) {
        console.error(err)
    }
}


