'use client';
import Link from 'next/link';

export  default function Page({userData}){
 
   const handleDelete=async(id)=>{
 
        const res=await fetch(`http://localhost:3000/server/api/users/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data=await res.json();
        if(data.success){
            alert(data.message);
        }else{
            alert(data.message);
        }
    };
return(  <div>
               <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((item)=>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.age}</td>
                            <td>
                                <Link href={`http://localhost:3000/frontend/user/${item.id}`}>
                                    <button>
                                        View Details
                                    </button>
                                </Link>
                                <Link href={`http://localhost:3000/frontend/user/${item.id}/edit`}>
                                    <button>
                                        Edit
                                    </button>
                                </Link>
                                <Link href={`http://localhost:3000/frontend/user/${item.id}/edit`}>
                                    <button>
                                        Edit
                                    </button>
                                </Link>
                                    <button onClick={()=>{handleDelete(item.id)}}>
                                        Delete
                                    </button>
                                
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
               </table>
               </div>)
}