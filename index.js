import express from "express"

//initlising server
const app = express();

//middleware
app.use(express.json());

const PORT = 8080;



// Hall booking


let hallData = [
  {
    roomName: "A",
    roomID: "1",
    amenities:
      [{
        chairs: "100",
        lights: "20",
        AC:"10"
      }],
      price: "2000",
    bookingStatus:"notbooked",
    customerName: "",
    date:"",
    starttime:"",
    endtime:"",
    nooftimesbooked:""
  },
  {
    roomName: "B",
    roomID: "2",
    amenities:
      [{
        chairs: "200",
        lights: "40",
        AC:"20"
      }],
      price: "4000",
    bookingStatus:"notbooked",
    customerName: "",
    date:"",
    starttime:"",
    endtime:"",
    nooftimesbooked:"",
  },
  {
    roomName: "C",
    roomID: "3",
    amenities:
      [{
        chairs: "300",
        lights: "60",
        AC:"30"
      }],
      price: "6000",
    bookingStatus:"notbooked",
    customerName: "",
    date:"",
    starttime:"",
    endtime:"",
    nooftimesbooked:"",
  },
  {
    roomName: "D",
    roomID: "4",
    amenities:
      [{
        chairs: "400",
        lights: "80",
        AC:"40"
      }],
      price: "8000",
    bookingStatus:"notbooked",
    customerName: "",
    date:"",
    starttime:"",
    endtime:"",
    nooftimesbooked:"",
  },
];


//getting data of all rooms
app.get("/rooms/all", (req, res) => {
  res.send(hallData);
});


// Booking a Room
app.put("/room/edit/:id", (req, res) => {
  const { id } = req.params;
  let filteredRoom = hallData.filter((room) => room.roomID == id);
  filteredRoom[0].customerName = req.body.customerName;
  filteredRoom[0].date = req.body.date;
  filteredRoom[0].starttime = req.body.starttime;
  filteredRoom[0].endtime = req.body.endtime;
  filteredRoom[0].bookingStatus = req.body.bookingStatus;
  filteredRoom[0].nooftimesbooked = req.body.nooftimesbooked;
  res.send(filteredRoom);
});


//booked room details
app.get("/bookedrooms", (req, res) => {
let filteredrooms = hallData.filter((room)=>room.bookingStatus == "booked");

let bookedrooms = []

for (let i=0;i<filteredrooms.length;i++)
{
  let roomName = filteredrooms[i].roomName;
  let bookingStatus = filteredrooms[i].bookingStatus;
  let customerName = filteredrooms[i].customerName;
  let date = filteredrooms[i].date;
  let starttime = filteredrooms[i].starttime;
  let endtime = filteredrooms[i].endtime;

  let obj =[roomName,bookingStatus,customerName,date,starttime,endtime];
   
  bookedrooms.push(obj);
}

res.send(bookedrooms)
});


//Customers with booked data
app.get("/bookedcustomers", (req, res) => {
  let filteredcustomers = hallData.filter((room)=>room.customerName != "");

  let bookedcustomers = []

for (let i=0;i<filteredcustomers.length;i++)
{
  let roomName = filteredcustomers[i].roomName;
  let customerName = filteredcustomers[i].customerName;
  let date = filteredcustomers[i].date;
  let starttime = filteredcustomers[i].starttime;
  let endtime = filteredcustomers[i].endtime;

  let obj =[roomName,customerName,date,starttime,endtime];
   
   bookedcustomers.push(obj);
}

  res.send(bookedcustomers)
  });


//Nooftimes customer booked
app.get("/nooftimes", (req, res) => {
  let nooftimes = hallData.filter((room)=>room.nooftimesbooked != "");

  let bookedtimes = [];
  
  for (let i=0;i<nooftimes.length;i++)
  {
    let roomName = nooftimes[i].roomName;
    let customerName = nooftimes[i].customerName;
    let date = nooftimes[i].date;
    let starttime = nooftimes[i].starttime;
    let endtime = nooftimes[i].endtime;
    let bookingStatus = nooftimes[i].bookingStatus;

    let obj =[roomName,customerName,date,starttime,endtime,bookingStatus];
   
    bookedtimes.push(obj);
  }

  res.send(bookedtimes)
  });


//start the server
app.listen(PORT, () => console.log(`Server started in localhost:${PORT}`));