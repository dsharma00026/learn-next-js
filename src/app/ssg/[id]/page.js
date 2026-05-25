import getUser,{getUserById} from "../../../../services/getUser";

export default async function Page({params}){

    const {id}=await params;
    console.log(id);
    const userDetails=await getUserById(id);
    return(
        <div>
            <h2>
                user detials show here
            </h2>
            <div>
                <h3>id: {userDetails.id}</h3>
                <h3>name :{userDetails.name}</h3>
                <h3>email:{userDetails.email}</h3>
                <div>
                    <h3>address</h3>
                    <p>street: {userDetails.address.street}</p>
                    <p>suite: {userDetails.address.suite}</p>
                </div>
            </div>
        </div>
    )
}

export async function generateStaticParams()
{
    const userdata=await getUser();
    return userdata.map((user)=>({
        id:user.id.toString()
    }))
}


