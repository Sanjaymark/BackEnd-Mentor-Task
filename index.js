import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./db.js";
import { studentRouter } from "./Routes/student.js";
import { mentorRouter } from "./Routes/mentor.js";


//configure env
dotenv.config();

//DB Connection
dbConnection();
const PORT = process.env.PORT;

//Initializing Server
const app = express();


//middlewares
app.use(express.json());


//Routes
app.use("/student", studentRouter);
app.use("/mentor", mentorRouter);



//Start Listening
app.listen(PORT, ()=>console.log(`Server Started in localhost:${PORT}`));