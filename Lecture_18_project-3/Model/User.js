import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

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


export default mongoose.model("User", userSchema)

