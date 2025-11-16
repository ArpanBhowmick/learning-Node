
import { v2 as cloudinary } from 'cloudinary';
import User from '../Model/User.js';


export const uploadImage = async(req, res) => {
    try {
        const filePath = req.file.path;

        // console.log(filePath);
        // console.log(req.file);


        const {name, email, password} = req.body;


        // Upload an image
     const uploadResult = await cloudinary.uploader
       .upload(filePath, {folder: "auth_uploads",
       });

       console.log(uploadResult)


    //    Creating User

        const db = await User.create({
            name,
             email,
              password,
            fileName:req.file.originalname,
            public_id:uploadResult.public_id,
            imgUrl:uploadResult.secure_url,
        })

        res.redirect("/")
        
    // res.render("register.ejs", {url: uploadResult.secure_url})

       
    } catch (err) {
        console.error(err)
        res.send("Upload Failed")
    }
}




// logging in 

export const login = async(req, res) => {

    const {email, password} = req.body
    // console.log("------------>*-------->", req.body)

    let user = await User.findOne({email});
    if(!user) {
        res.render("login.ejs");
    } else if(user.password != password) {
        res.render("login.ejs");
    } else {
        res.render("profile.ejs", {user})
    }
}

