"use client"

import { useState } from "react";

export default function Test1() {

 const [color, setColor] = useState("black");

 const handleColor = (val) => {
  if (val === "red") {
   setColor("red");
  } else if (val === "green") {
   setColor("green");
  } else {
   setColor("black")
  }
 }
 return (
  <div>
   <h2 style={{ backgroundColor: color }}>Hello, Next.js!</h2>
   <div>
    <button onClick={() => { handleColor("red") }}>
     Red Color
    </button>


    <button onClick={() => { handleColor("green") }}>
     Green Color
    </button>
   </div>
  </div>
 );
}


/*
here we learn about how to chanegs color using button measn u say conditonal css
*/