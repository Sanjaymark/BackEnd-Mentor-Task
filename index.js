import express from "express";
import { studenetRouter } from "./Routes/students.js";
import dotenv from "dotenv";


//initializing express server
const app = express();

dotenv.config()

const PORT = process.env.PORT;

//middlewares
app.use(express.json());

// application routes 
app.use("/students", studenetRouter);

//start the server
app.listen(PORT, () => console.log(`Server started in localhost:${PORT}`));