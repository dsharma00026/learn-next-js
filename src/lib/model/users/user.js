import  mongoose from "mongoose";
const  userModel=new  mongoose.Schema({
    name:{ type: String },
    age:{ type: String },
    mobile:{ type: String }
});

export  const User=mongoose.models.users || mongoose.model("users",userModel);