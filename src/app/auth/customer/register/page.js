"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
function Register() {

 const navigate = useRouter();

 const handleNavigate = (path) => {
  navigate.push(path);
 }
 return (
  <div>
   <h2>
    this is regispter page
   </h2>
   <div>
    <Link href="/auth/customer/login">
     <button>
      click here to go to login page
     </button>
    </Link>
    <Link href="/">
     <button>
      click here to go to home page
     </button>
    </Link>
   </div>
   <div>
    <button onClick={() => handleNavigate('/')}>
     HomePage
    </button>
    <br />
    <button onClick={() => handleNavigate('/auth/customer/login')}>
     LoginPage
    </button>
   </div>
  </div>
 )
}
export default Register;