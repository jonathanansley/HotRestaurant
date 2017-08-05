const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')


let app = express();
let PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static('public'))

// Front Page
app.get("/", (req, res)=>{
  res.sendFile(path.join(__dirname), "index.html")
})

// Tables
app.get("/tables", (req, res)=>{
  res.sendFile(path.join(__dirname), "tables.html")
})

// Reservation
app.get("/reserve", (req, res)=>{
  res.sendFile(path.join(__dirname), "reservation.html")
})


app.listen(PORT, ()=>{
  console.log("Server started on PORT: ", PORT);
})
