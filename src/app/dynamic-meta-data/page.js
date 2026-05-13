export default function Page(){

    return(
    <div>
        <h1>
            learn about dynamic meta data in next js
        </h1>
    </div>
    )
}

export function generateMetadata(){
    return{
        'title':'dynamic meta data in next js',
        'description':'here we learn about dynamic meta data in next js',
        'keywords':'next js, meta data,dynamic meta data, seo, web development',
    }
}