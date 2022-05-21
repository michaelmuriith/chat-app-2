const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose')


const app = express();


app.listen(4000, ()=>{
    console.log("server started on port 4000")
})

app.use(cors({
    origin: ["http://localhost:3000/"],
    method: ["GET", "POST"],
    credentials: true
}))

app.use(express.json());