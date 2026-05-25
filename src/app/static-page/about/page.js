import User from "../component/user";

export default function Page(){
    return(
        <div>
            <h1 className="h1">About Us</h1>
            <p>This is the about page.</p>
            <div>
                <User/>
            </div>
        </div>
    )
}