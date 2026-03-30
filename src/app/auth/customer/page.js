"use client"
import { useRouter } from "next/navigation";
export default function Customer() {
 const navigate = useRouter();
 const handleNavigate = (path) => {
  navigate.push(path);
 }
 return (

  <main>
   <div>
    <h2>
     All Customer List will be here
    </h2>
   </div>
   <div>
    <button onClick={() => handleNavigate('/auth/customer/login')}>
     login Customer
    </button>
    <button onClick={() => handleNavigate('/auth/customer/register')}>
     Register Customer
    </button>
   </div>
  </main>

 )
}