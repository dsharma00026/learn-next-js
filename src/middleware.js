import { NextResponse } from 'next/server'
export function middleware(request) {


 console.log('middleware called')
 console.log(request.nextUrl.pathname)

 //this is our basic authentication check, you can replace this with your own logic
 // const userLoggedIn = 1;
 // if (!userLoggedIn) {
 //  if (request.nextUrl.pathname === '/auth/customer/login') {
 //   return NextResponse.next()
 //  }
 //  return NextResponse.redirect(new URL('/auth/customer/login', request.url))
 // }

}