require("dotenv").config()

const express=require("express")
const mongoose =require("mongoose")
const cors =require("cors")
const connectDB = require("./config/database.js")

const app=express()

connectDB()

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("api running")
})

app.listen(3000);