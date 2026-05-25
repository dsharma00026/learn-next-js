"use client";

import { useState } from "react";

export default function Page(){

    const [image,setImage]=useState();
    const handleImage=async (e)=>{
        console.log('handle Image')
        e.preventDefault();
        const data=new FormData();
        data.set('image',image);


        const res=await fetch('http://localhost:3000/image/server/users/upload',{
            method:"POST",
            body:data
        });
        const result=await res.json();
        if(result){
            alert(result.message)
        }



        console.log(image);
    }
    return(
        <div>
            <div>
                <h1>
                    Uplaod image
                </h1>
            </div>
            <div>
                <form onSubmit={handleImage}>

<input type="file" name="file" onChange={(e)=>{setImage(e.target.files?.[0])}}>
</input>
<button type="submit"> Upload Image</button>
                </form>
            </div>
        </div>
    )
}