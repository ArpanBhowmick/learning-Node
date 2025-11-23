import mongoose from "mongoose";



const contactSchma = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    phone: {type: String, require: true},
    type: {type: String, require: true},
    user: {type: mongoose.Schema.Types.ObjectId, require: true},
},{timestamps: true})

export const Contact = mongoose.model("Contact", contactSchma)


// explaination of this line : user: {type: mongoose.Schema.Types.ObjectId, require: true},

// MongoDB gives every document a special ID, Whenever you create a user, MongoDB automatically creates a unique ID like this: 6916c1446f475cb189378ada

// This long ID is called an ObjectId. This is just the format MongoDB uses for IDs.
    

// It is EXACTLY like:
// type: String → text
// type: Number → numbers
// type: ObjectId → MongoDB ID
// So this: type: mongoose.Schema.Types.ObjectId
// Is the same as saying: “This field must contain a user’s _id.”
