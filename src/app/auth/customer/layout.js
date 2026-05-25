"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

function Layout({ children }) {

 const pathName = usePathname();
 return (
  <div>
   <div style={{ width: "100%", height: "15%", background: "green" }}>
    <ul style={{ gap: "10px", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
     {
      pathName !== "/auth/customer/login" ?

       <li style={{ margin: "10px", padding: "10px" }}>
        <Link href="/auth/customer/login">
         login
        </Link>
       </li> : null

     }
     {
      pathName !== "/auth/customer/register" ?

       <li style={{ margin: "10px", padding: "10px" }}>
        <Link href="/auth/customer/register">
         Register
        </Link>
       </li> : null
     }
    </ul>
   </div>
   <div>
    {children}
   </div>
  </div>
 )
}

export default Layout;
/*
here first we learn about how to make commont laypout for all the pages in auth/customer folder and how to use it in page.js file of auth/customer folder and also we learn about how to use link and useRouter for navigation between pages
*/

/*
now we learn about how to make layout condition based for example now in nav if page is login wo we hide login nave and page is register so we hide 
register nav
*/