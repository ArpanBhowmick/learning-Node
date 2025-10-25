import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  longUrl: { type: String, required: true },
  shortCode: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});


const Url = mongoose.model("Url_Shortner", urlSchema);
export default Url;


// Why?:
// Defines the structure of your data in MongoDB.