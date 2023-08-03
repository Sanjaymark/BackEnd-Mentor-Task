import express from "express";
import { Mentor } from "../models/mentors.js";
import { Student } from "../models/students.js";


const router = express.Router();


//Adding a mentor
router.post("/add", async (req,res)=>{
    try
    {
        //Check if email already exists
        const existingMentor = await Mentor.findOne({email:req.body.email});

        if(existingMentor)
        {
            return res.status(409).send({error: "Email already exists"});
        }

        const newMentor = await new Mentor(req.body).save();

        return res.status(201).send(newMentor);
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send({error: "Internal Server error"})
    }
});


//Assign a student to mentor
router.post("/:mentorId/assign", async(req,res) =>{
    try 
    {
        const { mentorId } = req.params;
        const studentId  = req.body._id;
        console.log(studentId)

        const mentor = await Mentor.findById(mentorId);
        const student = await Student.findById(studentId);

        if(!mentor)
        {
            return res.status(404).send({message: "Mentor not found"});
        }

        if(!student)
        {
            return res.status(404).send({message: "Student not found"});
        }

        //Check if Student is already assigned to a mentor
        if(student.mentor)
        {
            return res.status(409).send({message: "Student is already assigned to a mentor"});
        }

        mentor.student.push(studentId);
        student.mentor = mentorId;

        await mentor.save();
        await student.save();

        return res.status(200).send({message:"Student assigned to mentor successfully"})
    } 
    catch (error) 
    {
       console.log(error);
       res.status(500).send({error: "Internal server error"}); 
    }
});


//All students for a particular mentor
router.get("/:mentorId/students", async(req,res) => {
    try 
    {
        const {mentorId} = req.params;

        const mentor = await Mentor.findById(mentorId).populate("student");

        if(!mentor)
        {
            return res.status(404).send({error: "Mentor not found"});
        }

        return res.status(200).send(mentor.student);
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).send({error: "Internal server error"});
    }
});



export const mentorRouter = router; 