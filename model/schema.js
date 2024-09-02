const  mongoose=require("mongoose")
const jobschema=new mongoose.Schema({

    name: {type:String,required:true},
    email: String,
    birthday: Date,
    skills: Array,
    professional_skills:Array,
    photo:{type:String,default:"https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small_2x/default-avatar-icon-of-social-media-user-vector.jpg"},
    phone:Number,
})
module.exports=mongoose.model("jobs",jobschema)