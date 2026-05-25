"use client";
import { useEffect,useState } from 'react';
import {GetApiData} from '../page';
export default  function Page({params}){
    const [id,setId]=useState(null);
    const [name,SetName]=useState('');
    const [email,SetEmail]=useState('');
    const [age,SetAge]=useState(0);

    useEffect( ()=>{
          loadUser();
    },[]);

    async function loadUser(){
           const paramsData=await params;
           setId(paramsData.userId);
           const  userData=await GetApiData(paramsData.userId);
          SetName(userData.name);
          SetEmail(userData.email);
          SetAge(userData.age);
    }

    const handleUpdateUser= async ()=>{

        const url=`http://localhost:3000/server/api/users/${id}`;
        console.log('url for update',url);
        const res=await fetch(url,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name,email,age})
        });
        const data=await res.json();
        if(data.success){

            alert(data.message);
        }else{
            alert(data.message);

        }
    };

    return(
        <div>
            <h1>Edit User</h1>
            <div>
                <input type="text" value={name} onChange={(e) => SetName(e.target.value)} placeholder="Name"/><br></br>
                <input type="email" value={email} onChange={(e) => SetEmail(e.target.value)} placeholder="Email"/><br></br>
                <input type="number" value={age} onChange={(e) => SetAge(e.target.value)} placeholder="Age"/><br></br>
            </div>
            <div>
                <button onClick={()=>{handleUpdateUser()}}>
                    Update User
                </button>
            </div>
        </div>
    )
}