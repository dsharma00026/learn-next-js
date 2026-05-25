import getUser from "../../../services/getUser";
import Link from "next/link";
export default async function Page()
{
    const userdata=await getUser();
    return(
        <div>
            <div>
                <h1> learn about ssg page</h1>
            </div>
            <div>
                {
                    userdata.map((user)=>                    {
                        return(
                            <div key={user.id}>
                                <Link href={`/ssg/${user.id}`}>
                                    <h2>{user.name}</h2>
                                </Link>
                               
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}