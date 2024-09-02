const jobs=require("../model/schema")
exports.adduser=async(req,res)=>{
    
    try {
        const user=new jobs(req.body)
        await user.save()
        res.status(200).send({msg:"user added successfully",user})
        
    } catch (error) {

        res.status(404).send({msg:"user not added ",error})

        
    }
    
}
exports.getusers=async(req,res)=>{
    try {
        const users=await jobs.find()
        res.status(200).send({msg:"here is all the users",users})
        
    } catch (error) {
        res.status(404).send({msg:"user not added ",error})
    }
}
exports.deleteuser=async(req,res)=>{
    try {
        const user=await jobs.deleteOne({_id:req.params.id})
        res.status(200).send({msg:"user is deleted ",})
        
    } catch (error) {
        res.status(500).send({msg:"user not added ",error})
        
    }
}
exports.updateuser=async(req,res)=>{
    try {
        const updateduser=await jobs.updateOne({_id:req.params.id},{$set:req.body})
        res.status(200).send({msg:"update is completed ",updateduser})

    } catch (error) {
        res.status(500).send({msg:"faild",error})

        
    }
}