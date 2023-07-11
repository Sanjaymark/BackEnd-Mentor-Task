const express = require("express");
const fs = require("fs")
//initlising server
const app = express();

const PORT = 8080;

//Server endpoint
app.get("/", (req, res)=>{
  let date = new Date();
  let content = date.toUTCString();
  fs.writeFile("./currentTime.txt",content , (err)=>{
      if(err){
        res.send("Error Occured", err);
      }else {
        fs.readFile("./currentTime.txt","utf-8", (err, data) => {
          if (err) {
             res.send(`Error occured in reading : ${err}`);
          } else {
            res.send(data);
          }
        } )
      }
  }); 


})

//start the server
app.listen(PORT, ()=>console.log(`Server started in localhost:${PORT}`));