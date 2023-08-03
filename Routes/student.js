import express, { response } from "express";
import { Student } from "../models/students.js";
import { Mentor } from "../models/mentors.js"

const router = express.Router();

//Adding a Student
router.post("/add", async (req,res)=>
{
    try 
    {
        const existingStudent = await Student.findOne({email: req.body.email});

        if(existingStudent)
        {
            return res.status(409).send({ error: "Email already exists"});
        }

        const newStudent =await new Student(req.body).save();
        return res.status(201).send(newStudent);
    } 
    catch (error) 
    {
        //error handling
        console.log(error);
        res.status(500).send({ error:"Internal Server Error"});
    }
});


//To get all students
router.get('/all', async (req, res) => {
    try {
      const students = await Student.find();
      return res.status(200).json(students);
    } catch (error) {
      console.error('Error fetching all students:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

//To Change mentor for a student
router.put("/:studentId/change-mentor", async (req,res) =>{
    try 
    {
        const { studentId } = req.params;
        const newMentorId = req.body._id;

        const student = await Student.findById(studentId);
        const newMentor = await Mentor.findById(newMentorId);

        if(!student)
        {
            return res.status(404).send({error: "Student not found"});
        }

        if(!newMentor)
        {
            return res.status(404).send({error: "New mentor not found"});
        }


        //Remove the student from old mentor's students list
        if(student.mentor)
        {
            const oldMentor = await Mentor.findById(student.mentor);
            if(oldMentor)
            {
                oldMentor.student.pull(studentId);
                await oldMentor.save();
            }
        }


        //Set the new mentor for the student
        student.mentor = newMentorId;
        newMentor.student.push(studentId);

        await student.save();
        await newMentor.save();

        return res.status(200).send({message: "Mentor changed successfully"});
    }
    catch (error) 
    {
        console.log(error);
        res.status(500).send({error: "Internal server error"});
    }
});



//To show previously assigned mentor for a student
router.get("/:studentId/previous-mentor", async(req,res) =>{
    try 
    {
        const {studentId} = req.params;
        const student = await Student.findById(studentId).populate("mentor");

        if(!student)
        {
            return res.status(404).send({error: "Student not found"});
        }

        if(!student.mentor)
        {
            return res.status(200).send({message: "Student has no previous mentor"});
        }

        return res.status(200).send(student.mentor);
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).send({error: "Internal server error"});
    }
});



export const studentRouter = router;