'use client'
import Script from 'next/script';
export default function Page(){
    return(
        <div>
          <Script src="/location.js" crossorigin="anonymous">
          </Script>
            <h1>
                here we learn about script component in next js
            </h1>
            <div>
                <i className="fa fa-circle">icon</i>

                <div>
                     <button onClick={()=>getLocation()}>
                        Get location
                     </button>
                </div>
                <div >
<h id="result">
 result will be shown here
</h>
                </div>
            </div>
        </div>
    )
}