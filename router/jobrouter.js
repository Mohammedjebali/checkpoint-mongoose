const express=require("express")
const { adduser,getusers, deleteuser, updateuser } = require("../controlleer/jobcontroller")
const jobrouter=express.Router()
jobrouter.post("/jobuser",adduser)
jobrouter.get("/allusers",getusers)
jobrouter.get("/deleteduser/:id",deleteuser)
jobrouter.put("/update/:id",updateuser)
module.exports=jobrouter