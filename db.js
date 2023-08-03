import mongoose from "mongoose";

export function dbConnection()
{
    const params ={
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }
    try 
    {
        mongoose.connect("mongodb://127.0.0.1:27017/mentortask", params);
        console.log("Database Connected Successfully")
    } 
    catch (error) 
    {
        console.log("Error Connecting DB", error)
    }
}