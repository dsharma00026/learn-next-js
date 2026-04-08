"use client";
import Image from "next/image";
export default function Test2() {
 return (
  <div>
   <h1>Image Optimization in next js</h1>
   <div>
    <h2>this is normal image src html tag</h2>
    <img src="/images/example1.jpeg" alt="next js image" width={500} height={500} />
   </div>
   <div>
    <h2>this is next js image tag</h2>
    <Image src="/images/example1.jpeg" alt="my image" width={500} height={500} priority={true} >

    </Image>
   </div>
  </div>
 );
}

/*
here we learn about image optimization in next js



when we use normal image tag than it will not optimize means if image
size is 5mb than it will load 5mb image .

but when we use next js image tag than it will optimize the image means 
if image size is 5mb than it wil reduce the size and other thing of image accorignly to the device and screen size and other thing and it will load the optimized image
*/