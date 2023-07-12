//import express from "express"
const express = require("express");
const fs = require("fs");
//initlising server
const app = express();

//middleware
app.use(express.json());

const PORT = 8080;

//Server endpoint


// Car booking
// Vokswagon cars

let carData = [
  {
    id: "1",
    model: "sedan",
    engine: "1liter",
    transmission: "manual",
    name: "virtus",
    capacity: "5",
    variant: "TSI",
    isbooked: "true",
  },
  {
    id: "2",
    model: "SUV",
    engine: "1liter",
    transmission: "manual",
    name: "Taigun",
    capacity: "5",
    variant: "TSI",
    isbooked: "false",
  },
  {
    id: "3",
    model: "sedan",
    engine: "1.5liter",
    transmission: "Automatic",
    name: "virtus",
    capacity: "5",
    variant: "GT",
    isbooked: "false",
  },
  {
    id: "4",
    model: "SUV",
    engine: "1.5liter",
    transmission: "Automatic",
    name: "Taigun",
    capacity: "5",
    variant: "GT",
    isbooked: "true",
  },
];

app.get("/car/all", (req, res) => {
  const { isbooked, model } = req.query;
  let carInfo = carData;
  if (isbooked) {
    carInfo = carInfo.filter((car) => car.isbooked === isbooked);
  }
  if (model) {
    carInfo = carInfo.filter((car) => car.model === model);
  }
  res.send(carInfo);
});

//specific care details
app.get("/car/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  const filteredCar = carData.filter((car) => car.id === id);
  res.send(filteredCar);
});

//add a new car
app.post("/car/add", (req, res) => {
  const newCar = { ...req.body, id: (carData.length + 1).toString() };
  carData = [...carData, newCar];
  res.send(carData);
});

// edit a car
app.put("/car/edit/:id", (req, res) => {
  const { id } = req.params;
  let filteredCar = carData.filter((car) => car.id === id);
  filteredCar[0].isbooked = req.body.isbooked;
  res.send(filteredCar);
});

//delete a car
app.delete("/car/delete/:id", (req, res) => {
  const { id } = req.params;
  let remainingCars = carData.filter((car) => car.id != id);
  carData = [...remainingCars];
  res.send(carData);
});

//start the server
app.listen(PORT, () => console.log(`Server started in localhost:${PORT}`));