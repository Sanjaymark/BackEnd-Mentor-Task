const fs = require("fs");
const os = require("os");
console.log("i'm working good");

const [, , arg1, arg2] = process.argv;

function sum(num1, num2) {
  const value = parseInt(num1) + parseInt(num2);
  console.log(`The sum is ${value}`);
}

sum(arg1, arg2);

// to read a existing file
fs.readFile("./sample.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(`Error occured : ${err}`);
  } else {
    console.log(data);
  }
});
// to create a new file
const content = "Hey I'm writted by node js file system";
fs.writeFile("./newTextFile.txt", content, (err) => {
  if (err) {
    console.log(`Error occured : ${err}`);
  } else {
    console.log("File Writted succesfully");
  }
});

const appendContent = `\nHey I was edited by node js file system`;
// to edit a file
fs.appendFile("./newTextFile.txt", appendContent, (err) => {
  if (err) {
    console.log(`Error occured : ${err}`);
  } else {
    console.log("File updated succesfully");
  }
});

// delete a file.
fs.unlink("./newTextFile.txt", (err)=>{
    if (err) {
        console.log(`Error occured : ${err}`);
      } else {
        console.log("File deleted succesfully");
      }
});

//////////////////////////////////////////////////////////////////////////////////////
// Operating system level information 

console.log(`Total OS memory ${os.totalmem()}`);
console.log(`Free memory ${os.freemem()}`);
console.log(`Version of our OS ${os.version()}`);
console.log(`CPUS : `, os.cpus());

// Date packages 
let time = Date.now();
console.log("Time", time);
let date = new Date();
console.log("Day", date.getDate());
console.log("Month", date.getMonth());
console.log("Year", date.getFullYear());
console.log("Complete Date", date.toUTCString().slice(0, 17));