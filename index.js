import express from "express";
import { studenetRouter } from "./Routes/students.js";


//initializing express server
const app = express();

const PORT = 8080;

//middlewares
app.use(express.json());

// application routes 
app.use("/students", studenetRouter);

//start the server
app.listen(PORT, () => console.log(`Server started in localhost:${PORT}`));