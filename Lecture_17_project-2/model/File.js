import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
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
},  { timestamps: true }
);

// export const ImgSchema = mongoose.model("File", imageSchema);
export default mongoose.model("File", imageSchema);

