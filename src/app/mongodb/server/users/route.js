import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionSrt } from "@/lib/mogodb";
import {User} from "@/lib/model/users/user";
export async function GET(){

    try{

        await mongoose.connect(connectionSrt);
        const  userData=await User.find();
        console.log(userData);
        
        if(!userData){
            return NextResponse.json({
                'status':false,
                'message':"No user data found"
            });
        }
        return NextResponse.json({
            'status':true,
            'data':userData,
            'message':"User data fetched successfully"
        });
    }catch(error){
        console.error(error);
        return NextResponse.json({
            'status':false,
            'message':error.message,
     });
    }

}

export async function POST(request){

    const payload =await request.json();
    await mongoose.connect(connectionSrt);
    let user =new User({
        name:payload.name,
        age:payload.age,
        mobile:payload.mobile
    })

    const result=await user.save();
    return NextResponse.json({
        'status':true,
        'message':"user create successfully",
        'data':user
    })

}