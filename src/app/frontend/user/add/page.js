"use client";

import { useState } from "react";
export default function Page(){

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleSubmit=async ()=>{
       //here we hit api  with post method
       const res=await fetch('http://localhost:3000/server/api/users',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({email,password})
    });
        const data=await res.json();
        if(data.status){
            alert(data.message);
        }else{
            
            alert(data.message);
        }
    };
    

    return(
        <div>
            <h1>Add User</h1>
            <div>
                    <input type="email" name="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" name="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button  onClick={handleSubmit}>Add User</button>
                
            </div>
        </div>
    );
}