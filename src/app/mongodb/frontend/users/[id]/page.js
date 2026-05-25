"use client";

import { useEffect, useState } from "react";

export default  function Page({params}) {


  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [mobile, setMobile] = useState();
  const [id,setId]=useState();
    
 
 
  useEffect(()=>{
loadUserData()
  },[])
    
    
    async function loadUserData(){
   const paramsData=await params;
    const userData=await getUserData(paramsData.id)
    
    if(!userData.status){
        alert(userData.message)
     
    }
    console.log(userData)
    setName(userData.data.name??'')
    setAge(userData.data.age??'')
    setMobile(userData.data.mobile??'')
    setId(userData.data._id)
}






  const handleAddUser = async () => {
    
    const res=await fetch(`http://localhost:3000/mongodb/server/users/${id}`,{
        method:"PUT",
        body:JSON.stringify({name,age,mobile})
        });
        const data=await res.json();
            alert(data.message)
        
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, rgb(15,23,42), rgb(30,41,59), rgb(51,65,85))",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "450px",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "20px",
          padding: "35px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
         Edit User
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: "14px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.15)",
              outline: "none",
              fontSize: "16px",
              background: "rgba(255,255,255,0.12)",
              color: "white",
            }}
          />

          <input
            type="text"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={{
              padding: "14px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.15)",
              outline: "none",
              fontSize: "16px",
              background: "rgba(255,255,255,0.12)",
              color: "white",
            }}
          />

          <input
            type="text"
            placeholder="Enter Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            style={{
              padding: "14px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.15)",
              outline: "none",
              fontSize: "16px",
              background: "rgba(255,255,255,0.12)",
              color: "white",
            }}
          />

          <button
            onClick={handleAddUser}
            style={{
              marginTop: "10px",
              padding: "14px",
              border: "none",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
              boxShadow: "0 6px 20px rgba(59,130,246,0.4)",
            }}
          >
            Save User
          </button>
        </div>
      </div>
    </div>
  );
}

async function getUserData(id){

    const res=await fetch(`http://localhost:3000/mongodb/server/users/${id}`);
    const data=await res.json();
    return data;

}


