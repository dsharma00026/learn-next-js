import { Roboto } from "next/font/google";

const roboto = Roboto({
 subsets: ["latin"],
 weight: ["400", "600"],
 style: ["italic"]
});

export default function Test3() {
 return (
  <div>
   <h1 className={roboto.className} >here we learn about font optimization</h1>
  </div>
 )
}

/*
here we learn about font optimization in next js 
when we use font style without otimiation than it will  request always when our page load or refresh 
but when we use font optimization thant it will store font in cache and not request so that why our speed fast and we 
dont request many time.
*/