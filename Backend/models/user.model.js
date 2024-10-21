import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  
  password: {
    type: String,
    required: [true, "password is required"], // message to frontend
  },
  
}, { timestamps: true });

 const User = mongoose.model("User", userSchema); // create the document by this name

 export default User
