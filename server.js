const express= require("express")
const connectdb=require("./configuration/config")
const jobrouter = require("./router/jobrouter")
const app=express()
const port=4000
connectdb()
app.use(express.json())
app.use("/api",jobrouter)
app.listen(port,()=>{
    console.log("server is running");
    
})