"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Customer() {

 const customer =
  [
   {
    id: 1,
    name: "deepak1",
   },
   {
    id: 2,
    name: "deepak2",
   },
   {
    id: 3,
    name: "deepak3",
   },
   {
    id: 4,
    name: "deepak4",
   },
  ];
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
   <div>
    <h2>
     All Customer List
    </h2>
    <div>
     <table>
      <thead>
       <tr>
        <th>id</th>
        <th>name</th>
       </tr>
      </thead>
      <tbody>
       {
        customer.map((item =>
         <tr>
          <td><Link href={`/auth/customer/${item.id}`}>{item.id}</Link></td>
          <td>{item.name}</td>
         </tr>
        ))
       }
      </tbody>
     </table>
    </div>
   </div>
  </main>

 )
}


/*
now we learn about dynamic routing where we create arrray of customer and click any customer show its 
move to customer detatils page where we saw aal detiasl of customer

now we make same 2 aaray in custome page.js and also [customer ] inside this after
we send id as param and find custoemr detials insiade [...custome rpage .js and show in ui]
*/