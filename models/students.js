import mongoose from "mongoose";


const studentSchema = new mongoose.Schema(
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
        batch:{
            type:String,
            required:true,
            trim:true
        },
        qualification:{
            type:String,
            required:true,
            trim:true
        },
        mentor:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"mentor"
        }
    }
)

const Student = mongoose.model("student", studentSchema);

export { Student };