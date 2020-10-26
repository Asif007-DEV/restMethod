const express = require("express");
const router = express.Router();
const user = require("../models/user");

router.get("/", async (req, res)=>{
    try{
        const uDetails = await user.find();
        res.json(uDetails);
    }catch(err){
        res.send("Error: "+err);
    }
});

router.get("/:id", async (req, res)=>{
    try{
        const uDetail = await user.findById(req.params.id);
        res.json(uDetail);
    }catch(err){
        res.send("Error: "+err);
    }
});

router.post("/", async (req,res)=>{
    const getuser = new user({
        username : req.body.username,
        email : req.body.email,
        password : req.body.password
    });
    try{
        const u1 = await getuser.save();
        res.json(u1);
    }catch(err){
        res.send("Error: "+err);
    }
});

router.patch("/:id", async (req,res)=>{
    try{
        const editUser = await user.findById(req.params.id);
        editUser.username = req.body.username;
        const u1 = await editUser.save();
        res.json(u1);
    }catch(err){
        res.send("ERROR: "+err);
    }
});

router.delete("/:id", async (req,res)=>{
    try{
        const deleteUser = await user.findOneAndDelete(req.params.id);
        res.json(deleteUser);
    }catch(err){
        res.send("ERROR: "+err);
    }
});

module.exports = router;