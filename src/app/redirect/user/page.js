import {redirect} from 'next/navigation'
export default function Page()
{
    redirect('/redirect/home')

    return(
        <div>
            <h2>
                user page
            </h2>
        </div>
    )
}