import  {writeFile} from 'fs/promises'
import { NextRequest, NextResponse } from "next/server";

export async function POST(request){
    const data=await  request.formData();
    const file=data.get('image');
    if(!file){
        return NextResponse.json({
            'status':false,
            "message":'file not found'
        },{status:400})
    }
    const byteData =await file.arrayBuffer();
    const buffer=Buffer.from(byteData);
    const path=`./public/${file.name}`;
    await writeFile(path,buffer);
    return NextResponse.json({
        'status':true,
        'message':'file saved succesfully',
    });
}