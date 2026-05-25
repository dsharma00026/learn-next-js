import { user } from "@/util/db";
import { NextResponse } from "next/server";

// export function GET(request)
// {
//     return NextResponse.json({
//         name:'deepak',
//         age:50
//     },{status:200});

// }

export async function GET(request,content)
{
    //here we fetch data from database and return it to client
    const params=await content.params;
    const userData=user.find((item)=>{
        return item.id==params.id;
    });
    if(!userData){
        return NextResponse.json({error:'User not found'},{status:404});
    }
    return NextResponse.json(userData,{status:200});

}


export async function PUT(request,content){
const params=await content.params;//for get params from url
const payload=await request.json();//for get data from request body
console.log('payload from client',payload);
console.log('id from url',params.id);
const userData=user.find((item)=>{
    return item.id==params.id;
});
if(!userData){
    return NextResponse.json({
        'status':false,
        'message':'User not found',
    },{status:404});
}
const  beforeUpdate={...userData};
//update user data
userData.name=payload.name || userData.name;
userData.age=payload.age || userData.age;

return NextResponse.json({
    'status':true,
    'message':'User updated successfully',
    data:userData,
    before:beforeUpdate

});
}

export async function DELETE(request,content){
    const params=await content.params;
    const userIndex=user.findIndex((item)=>{
        return item.id==params.id;
    });
    console.log('user index for delete',userIndex);
    if(userIndex<0){
        return NextResponse.json({
            'status':false,
            'message':'User not found',
        },{status:404});
    }
    user.splice(userIndex,1);
    return NextResponse.json({
        'status':true,
        'message':'User deleted successfully',
    },{status:200});
}