"use client"
<<<<<<< HEAD

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <div>
        <Link href="/calculator">Calculator</Link>
      </div>
      <div>
        <Link href="/product">Product</Link>
      </div>
    </div>
  );
}
=======
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("click on the button to change the name");
  const navigate = useRouter();


  const newComponent = (username) => {
    return (
      <div>
        <h2>
          name is:{username}
        </h2>
      </div>
    )
  }
  return (
    <div>
      <h1 style={
        { color: "red", textAlign: "center", padding: "50px" }
      }>
        Hello world
      </h1>
      <div>
        <h2 style={
          { color: "blue", textAlign: "center", padding: "20px" }
        }>
          this is my first line of code in next js
        </h2>
      </div>
      <div>
        <button onClick={() => { setName("deepak sharma") }}>
          Click Here
        </button>
        {newComponent(name)}
      </div>
      <button onClick={() => navigate.push('/auth/customer')} >
        Customer Page
      </button>

    </div>
  );
}
>>>>>>> 77e9aea7d4a7df69af718a1bd2d36f2b4a89e447
