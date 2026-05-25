import Link from "next/link";
import UserTable from "../user/UserTable/page";

export default async function Page(){

    const userData=await GetApiData();
    console.log('user data from api',userData);

 
    return(
        
        <div>
            <div>
                <h1>
                    all user list here
                </h1>
                <Link href={'http://localhost:3000/frontend/user/add'}>
                    <button>
                        Add User
                    </button>
                </Link>
                {
                    userData.length==0 ? <h2>No user found</h2>:<UserTable userData={userData}/>
                }
            </div>
          
        </div>
        
    )
}

async function GetApiData(){
    const res= await fetch('http://localhost:3000/server/api/users');
    const data=await res.json();
    return data;
}