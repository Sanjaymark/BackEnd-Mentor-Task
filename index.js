const fs = require("fs");

const [, , arg1,arg2] = process.argv ;

function sum(num1,num2)
{
    const value = parseInt(num1) + parseInt(num2);
    console.log(`The sum is ${value}`);
}

sum(arg1,arg2);

//to read a file
fs.readFile("./sample.txt", "utf-8", (err,data)=>
{
    if(err)
    {
        console.log(`error: ${err}`);
    }
    else{
        console.log(data);
    }
});

//to create a new file
const content = "I am written by js File System";
fs.writeFile("./newTextFile.txt",content,(err)=>
{
    if(err)
    {
        console.log(`error: ${err}`);
    }
    else{
        console.log("File Created successfully");
    }
});

// to edit a file
const appendContent = `\nI am edited by JS file system`;
fs.appendFile("./newTextFile.txt", appendContent, (err)=>
{
    if(err)
    {
        console.log(`error: ${err}`);
    }
    else{
        console.log("File Edited successfully");
    }
});

//delete a file
fs.unlink("./newTextFile",(err)=>
{
    if(err)
    {
        console.log(`error: ${err}`);
    }
    else{
        console.log("File Deleted successfully");
    } 
})