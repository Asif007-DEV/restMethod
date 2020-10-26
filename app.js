const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser:true});
const conn = mongoose.connection;

conn.on("open",()=>{
    console.log("Connected...");
});
app.use(express.json());
app.use(express.urlencoded({extended:false}));


const userRouter = require("./routers/users");

app.use("/users",userRouter);

app.listen(3000,()=>console.log("Server runing on port 3000"));

