"use client";
import { useRouter } from "next/navigation";
export default function Page(params){

    const router=useRouter()
    const handleDelete=async ()=>{
        const paramData=await params;
        const res=await fetch(`http://localhost:3000/mongodb/server/users/${paramData.id}`,{
            method:"DELETE"
        });
        const data=await res.json();
        if(data.status){
            alert('data Delete Successfully');
            router.push('/mongodb/frontend/users')

        }
    }

    return(
        <div>
            <button onClick={()=>{handleDelete()}}>
                Delete
            </button>
        </div>
    )
}