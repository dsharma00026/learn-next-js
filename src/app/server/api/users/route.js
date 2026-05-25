import { user } from "@/util/db";
import { NextResponse } from "next/server";

// export function GET(request)
// {
//     return NextResponse.json({
//         name:'deepak',
//         age:50
//     },{status:200});

// }

export function GET(request)
{
    //here we fetch data from database and return it to client
    const data=user;
    return NextResponse.json(data,{status:200});

}

export async function  POST(request){
    const payload=await request.json();
    
    //now conert this into auth 
    const email='deepaksolutions2001@gmail.com';
    const password='password';
    if(payload.email!=email || payload.password!=password){

        return NextResponse.json({
            'status':false,
            'message':'invalid credentials'
        },{status:401});
    }
    return NextResponse.json({
        'status':true,
        'message':'login successful',
        data:payload
    },{status:200});
}