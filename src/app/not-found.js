"use client"

import { useRouter } from "next/navigation"

export default function GlobalpageNotFound() {
 const navigate = useRouter();
 return (
  <div>
   <h2>Sorry Page not found</h2>
   <button onClick={() => { navigate.push('/') }}>Home</button>
  </div>
 )
}