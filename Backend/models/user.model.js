<<<<<<< HEAD


import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"], // Message to frontend
  },
}, { timestamps: true });

const User = mongoose.model("User", userSchema); // Create the document by this name

export default User;
=======
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
>>>>>>> a7d26c9303f6cb6f2ed8837ea860add68c0b5e2b
