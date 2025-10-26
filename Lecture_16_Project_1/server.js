import express, { urlencoded } from "express";
import mongoose, { mongo } from "mongoose";
import { shortUrl, getOriginalUrl } from "./Controllers/url.js";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}))

mongoose.connect(
  "mongodb+srv://arpanbhowmick28_db_user:MBJdXXZhBVOMd0nV@cluster0.bucfb7i.mongodb.net/", { dbName: "NodeJs_Mastery_course" }
).then(()=> console.log("MongoDB connected..!")).catch((err)=> console.log(err))


// rendering ejs 
app.get("/", (req, res)=>{
    res.render('index.ejs', {shortUrl : null})
})

// shorting url logic
app.post("/short", shortUrl)

// redirect to original URL using short code: dynamic routing

// i click on the shorted link it generaes a GET request and the server.js handles the request , its not connected to the ejs it handles the request by checking in the server.js automatically

app.get("/:shortedCode",getOriginalUrl)


app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))


