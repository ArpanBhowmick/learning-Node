import mongoose from "mongoose";

const ImgSchema = new mongoose.Schema({
    fileName: {
    type: String,
    required: true,
  },
  public_id: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  
}, {timestamps: true})


export default mongoose.model("AuthImage", ImgSchema)

