import { Url } from "../Models/Url.js"
import shortid from "shortid"

export const shortUrl = async (req, res) => {
    const longUrl = req.body.longUrl;
    const shortCode = shortid.generate() //just makes a random ID, it doesn’t know what URL it belongs to.

    const shortUrl = `http://localhost:3000/${shortCode}`


    // save to database
     
    const newUrl = new Url({shortCode, longUrl}) //creates a record that stores both the random short code and the original long URL together.
    //shortCode acts like a button to finds the longUrl in the same record and “calls it

    await newUrl.save(); //saves this record in MongoDB.
    console.log("shorturl saved = ", newUrl)

    res.render("index.ejs", {shortUrl})  // passing shortUrl to EJS

}

export const getOriginalUrl = async (req, res) => {

    const shortCode = req.params.shortCode

    // find on DB 

    const originalUrl = await Url.findOne({shortCode})
    if (originalUrl) {
        res.redirect(originalUrl.longUrl)
    } else {
        res.json({message: "Invalid shortcode"})
    }

    
}






