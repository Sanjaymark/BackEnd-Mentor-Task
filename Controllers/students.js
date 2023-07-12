import { client } from "../db.js";

export function getAllStudents(){
    return client
    .db("bootcamp")
    .collection("students")
    .find()
    .toArray();  
}

export function getStudentbyId(){

}

export function addStudent(){

}

export function editStudentbyId(){

}

export function deleteStudentbyId(){

}