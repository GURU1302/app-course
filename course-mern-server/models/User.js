import mongoose from "mongoose";
import validator from "validator";

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter the name of the user"],
    },
    email:{
        type: String,
        required:[true,"Please enter the email of the user"],
        unique:true,
        validate:validator.isEmail,
    },
    password:{
        type: String,
        required:[true,"Please enter the password"],
        minLength:[6,"Pasword should be atleast 6 characters long"],
        select: false,
    },
    role:{
        type: String,
        enum:["admin","user"],
        default: "user",
    },
    
    avatar: {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },

      playlist: [
        {
          course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
          },
          poster: String,
        },
      ],
    
      createdAt: {
        type: Date,
        default: Date.now,
      },
    
      resetPasswordToken: String,
      resetPasswordExpire: String,

});

export const User = mongoose.model("User", schema);