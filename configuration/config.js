
const mongoose=require("mongoose")
const connectdb=async()=>{
    try {
       await mongoose.connect("mongodb://127.0.0.1:27017/mohamed")
        console.log("data base is connected");
        
    } catch (error) {
        console.log("data base is not connected");

        
    }
}
module.exports=connectdb