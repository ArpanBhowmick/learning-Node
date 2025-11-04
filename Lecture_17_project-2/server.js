import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 5000;

mongoose
  .connect(
    "mongodb+srv://arpanbhowmick28_db_user:NU2kteuhAl0p7Dgd@cluster0.8olw0t0.mongodb.net/",
    {
      dbName: "Image Uploader Project",
    }
  )
  .then(() => console.log("MongoDb Connected...!"))
  .catch((err) => console.log(err));


//   rendering ejs file 
app.get("/", (req, res) => {
    res.render("index.ejs", {url: null} )
})

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));
