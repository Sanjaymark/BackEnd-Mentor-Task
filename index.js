const express = require("express");
const fs = require("fs");

//initializing server
const app = express()
const PORT = 8081;


//SERVER ENDPOINT
app.get("/",(req, res)=>
{
    let date = new Date();
    let content = date.toUTCString();
    fs.writeFile("./Timestamp/date-time.txt",content, (err)=>
    {
        if(err)
        {
            res.send("Error Occured", err);
        }
        else
        {
            fs.readFile("./Timestamp/date-time.txt","utf-8", (err, data)=>
            {
                if(err)
                {
                    res.send("Error:",err);
                }
                else
                {
                    res.send(data);
                }
            })
        }
    })
})




//start the server
app.listen(PORT, ()=>console.log(`Server started in localhost:${PORT}`))