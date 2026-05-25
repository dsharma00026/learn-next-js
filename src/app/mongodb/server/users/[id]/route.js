import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionSrt } from "@/lib/mogodb";
import {User} from "@/lib/model/users/user";

export  async function GET(request,content){

    const param=await content.params;
    console.log("we are here",param.id)
    await mongoose.connect(connectionSrt);
    const data=await User.findById(param.id);
    if(!data){
        return NextResponse.json({
            'status':false,
            'message':"user Not found"
        })
    }
    return NextResponse.json({
        'status':true,
        'message':"user found succesfully",
        'data':data
    })

    
}


export async function PUT(request,content){

    const param=await content.params;
    const payload=await request.json();
    await mongoose.connect(connectionSrt);
    const user=await User.findOneAndUpdate({_id:param.id},payload);
    if(!user){

        return NextResponse.json({
            'status':false,
            'message':'user not found',
            
        })
    }
     return NextResponse.json({
            'status':true,
            'message':'user update succesfully',
            'data':user
            
        })
}


export async function  DELETE(request,content) {
    const param=await  content.params;
    await mongoose.connect(connectionSrt);
    const user=await User.deleteOne({_id:param.id});
if(!user){

        return NextResponse.json({
            'status':false,
            'message':'user not found',
            
        })
    }
     return NextResponse.json({
            'status':true,
            'message':'user update succesfully',
            'data':user
            
        })

}