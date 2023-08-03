import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema;


const mentorSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true
        },
        student:[{
            type:mongoose.Schema.Types.ObjectId,
            ref: "student"
        }]
    }
)

const Mentor = mongoose.model("mentor", mentorSchema);

export { Mentor };