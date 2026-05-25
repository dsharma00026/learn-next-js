export default function Page(){
    console.log(process.env.NODE_ENV)
    console.log(process.env.APP_NAME)
    console.log(process.env.SERVER_PASSWORD)
    return(
        <div>
            <div>
                here we learn about enviorment variables in next js
            </div>
            <div>
                {
                    process.env.NODE_ENV === 'production' ? 
                    'this is production enviorment' :
                     'this is development enviorment'
                }
                
            </div>
        </div>
    )
}