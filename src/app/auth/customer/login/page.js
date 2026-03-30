"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Login() {

 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [isLogin, setIsLogin] = useState(false);
 const [message, setMessage] = useState("");

 const navigate = useRouter();

 const handleLogin = () => {
  if (email === "deepaksolutions2001@gmail.com" && password === "password") {
   setIsLogin(true);
   setMessage("Login successful");
  } else {
   setMessage("Invalid email or password");
  }
 }

 return (
  <div>
   <h2>
    this is Login Page
   </h2>
   <div>
    <div>
     <input type="text" placeholder="enter email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
     <input type="password" placeholder="enter password" onChange={(e) => { setPassword(e.target.value) }} value={password} />
    </div>
    <button onClick={handleLogin}>
     Login
    </button>
   </div>

   <div>
    <h2>
     email is:{email}
    </h2>
    <h2>
     password is:{password}
    </h2>
    <h2>
     is Login={isLogin ? "Yes" : "No"}
    </h2>
    <h2>
     meesage is:{message}
    </h2>
   </div>

   <div>
    <Link href="/auth/customer/register">
     <button>
      click here to go to register page
     </button>
    </Link>
    <Link href="/">
     <button>
      click here to go to home page this is link
     </button>
    </Link>
   </div>
   <div>
    <button onClick={() => navigate.push('/')}>
     HomePage
    </button>
    <br />
    <button onClick={() => navigate.push('/auth/customer/register')}>
     RegisterPage
    </button>
   </div>
  </div>
 )
}

export default Login;