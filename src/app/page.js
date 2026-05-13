"use client"

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