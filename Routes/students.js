import express from "express";
import { getAllStudents } from "../Controllers/students.js";
//initializing router
const router = express.Router(); 

router.get("/all", async(req, res)=>{
    try {
        const students = await getAllStudents();
      res.status(200).send(students); 

    } catch (error) {
        console.log(error);
      res.status(500).send({message:"Internal server error"})
    }
})

router.get("/:id", async(req, res)=>{

})

router.post("/add", async(req, res)=>{

})

router.put("/edit/:id", async(req, res)=>{
    
})

router.delete("/delete/:id", async(req, res)=>{
    
})
export const studenetRouter = router;