import Link from "next/link";

import DeleteUser from "./DeleteUser/page"
import { cache } from "react";

export default async function Page(){

    const userData=await getUserData();
    if(!userData.status){
        //message here
    }
    return(
        <div>
            <h1>User list</h1>
            <Link href={'/mongodb/frontend/users/add'}>Add User</Link>
            <div>
                {
                    userData.data.length===0?"no user data found":
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Mobile</th>
                            <th>edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.data.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.mobile}</td>
                                <td>
                                    <Link href={`/mongodb/frontend/users/${user._id}`}>Edit</Link>
                                    <DeleteUser id={user._id}/>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                }
            </div>
        </div>
    )
}

async function getUserData(){
    const res=await fetch('http://localhost:3000/mongodb/server/users',{
        cache:"no-cache"
    });
    const data=await res.json();
    console.log(data);
    return data;
}